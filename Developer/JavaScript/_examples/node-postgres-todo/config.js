/**
 * Created by JeremiahYan on 16/4/20.
 */

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/todo';

module.exports = connectionString;