import response from '../../../utils/response.js';
import WeeklySummaryRepositories from '../repositories/summary-repositories.js';

export const getWeeklySummaries = async (req, res) => {
  const { id: userId } = req.user;
  const limit = parseInt(req.query.limit) || 10;
  const offset = parseInt(req.query.offset) || 0;

  const summaries = await WeeklySummaryRepositories.getSummariesByUser(userId, { limit, offset });

  return response(res, 200, 'Ringkasan mingguan berhasil ditampilkan', {
    summaries,
    pagination: { limit, offset },
  });
};

export const getLatestWeeklySummary = async (req, res) => {
  const { id: userId } = req.user;

  // Return the cached summary immediately — trigger regeneration in the background
  const summary = await WeeklySummaryRepositories.getLatestSummary(userId);
  response(res, 200, 'Ringkasan mingguan terbaru berhasil ditampilkan', { summary });

  // Background refresh (non-blocking) — does not delay the HTTP response
  setImmediate(async () => {
    try {
      const todayStr = new Date().toISOString().split('T')[0];
      await WeeklySummaryRepositories.generateWeeklySummaryInternal(userId, todayStr);
    } catch (err) {
      console.error(`[Background] Weekly summary auto-generation failed: ${err.message}`);
    }
  });
};

