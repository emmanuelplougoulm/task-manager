import { expect, test } from './fixtures';

test.describe('kanban board', () => {
  test.beforeEach(async ({ seed, board }) => {
    await seed([
      { title: 'Plan sprint', status: 'pending' },
      { title: 'Review PR', status: 'inProgress' },
      { title: 'Deploy', status: 'done' }
    ]);
    await board.switchTo('Board');
  });

  test('groups tasks by status', async ({ board }) => {
    await expect(board.column('To do').getByRole('article')).toHaveText([/Plan sprint/]);
    await expect(board.column('In progress').getByRole('article')).toHaveText([/Review PR/]);
    await expect(board.column('Done').getByRole('article')).toHaveText([/Deploy/]);
  });

  test('moves a task by drag and drop', async ({ board }) => {
    await board.card('Plan sprint').dragTo(board.column('Done'));

    await expect(board.column('Done').getByRole('article')).toHaveCount(2);
    await expect(board.column('To do').getByRole('article')).toHaveCount(0);

    await board.switchTo('Table');
    await expect(board.row('Plan sprint')).toContainText('Done');
  });

  test('opens a card for editing', async ({ board }) => {
    await board.openEdit('Review PR');
    await expect(board.titleInput).toHaveValue('Review PR');
    await expect(board.statusSelect).toHaveValue('inProgress');
  });
});
