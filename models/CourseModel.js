
module.exports = async(Sequelize, sequelize) => {
  return await sequelize.define('course', {
    id: {
      type: Sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.DataTypes.UUIDV4()
    },
    title: {
      type: Sequelize.DataTypes.STRING(32),
      allowNull: false
    },
    price: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    count: {
      type: Sequelize.DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    }
  })
}