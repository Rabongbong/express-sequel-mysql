
module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('list', {

    title: {
      type: DataTypes.STRING(30),
      primaryKey: true,
      allowNull: false,
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, 
    },
  }, {
    tableName: 'list',
    comment: '게시판',
    charset: 'utf-8',
    collate: 'utf8_general_ci',
    timestamps: false
  });
  return todo;
}