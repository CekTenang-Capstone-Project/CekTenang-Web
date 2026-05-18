import response from '../../../utils/response.js';
import {
  AuthorizationError,
  InvariantError,
  NotFoundError,
} from '../../../exceptions/index.js';
import ActivityRepositories from '../repositories/activity-repositories.js';

export const createActivity = async (req, res, next) => {
  const {
    activityDate,
    sleepHours,
    studyHours,
    screenTimeHours,
    socialMediaHours,
    physicalActivityMinutes,
    caffeineIntakeMg,
    moodScore,
    fatigueLevel,
    assignmentLoad,
    deadlinePressure,
    socialInteractionScore,
    financialWorryScore,
    healthConditionScore,
  } = req.validated;

  // Fixed: was req.user.userId (always undefined). JWT payload uses { id }.
  const { id: userId } = req.user;

  const activity = await ActivityRepositories.createActivity({
    userId,
    activityDate,
    sleepHours,
    studyHours,
    screenTimeHours,
    socialMediaHours,
    physicalActivityMinutes,
    caffeineIntakeMg,
    moodScore,
    fatigueLevel,
    assignmentLoad,
    deadlinePressure,
    socialInteractionScore,
    financialWorryScore,
    healthConditionScore,
  });

  if (!activity) {
    return next(new InvariantError('Gagal menambahkan aktivitas'));
  }

  return response(res, 201, 'Aktivitas berhasil ditambahkan', { activity });
};

export const getActivities = async (req, res) => {
  const { id: userId } = req.user;
  const limit = parseInt(req.query.limit) || 20;
  const offset = parseInt(req.query.offset) || 0;

  const activities = await ActivityRepositories.getActivitiesByUser(userId, {
    limit,
    offset,
  });

  return response(res, 200, 'Aktivitas berhasil ditampilkan', {
    activities,
    pagination: { limit, offset },
  });
};

export const getActivityById = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const activity = await ActivityRepositories.getActivityById(id);

  if (!activity) {
    return next(new NotFoundError('Aktivitas tidak ditemukan'));
  }

  const isOwner = await ActivityRepositories.verifyActivityOwner(id, userId);

  if (!isOwner) {
    return next(
      new AuthorizationError('Anda tidak berhak mengakses resource ini'),
    );
  }

  return response(res, 200, 'Aktivitas berhasil ditampilkan', { activity });
};

export const deleteActivity = async (req, res, next) => {
  const { id } = req.params;
  const { id: userId } = req.user;

  const isOwner = await ActivityRepositories.verifyActivityOwner(id, userId);

  if (!isOwner) {
    return next(
      new AuthorizationError('Anda tidak berhak menghapus aktivitas ini'),
    );
  }

  const deletedActivity = await ActivityRepositories.deleteActivity(id);

  if (!deletedActivity) {
    return next(new NotFoundError('Aktivitas tidak ditemukan'));
  }

  return response(res, 200, 'Aktivitas berhasil dihapus', { deletedActivity });
};
