
module.exports = async(Sequelize, sequelize) => {
  return await sequelize.define('lesson', {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4()
    },
    lesson_name: {
      type: Sequelize.DataTypes.STRING(32),
      allowNull: false
    },
    count: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  })
}