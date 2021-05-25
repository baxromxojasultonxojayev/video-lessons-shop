const {Sequelize } = require ('sequelize');
const CategoryModel = require('./models/Category.Model');
const CourseModel = require('./models/CourseModel');
const LessonModel = require('./models/LessonModel');
const UserModel = require('./models/UserModel');


const sequelize = new Sequelize('postgres://postgres:new_password@localhost:5432/video_lessons', {
  logging: (log) => console.log(`SQL: ${log}`)
})

async function main(){
  try{
    await sequelize.authenticate()
    console.log('Connected');

    let db = {}

    db.users = await UserModel(Sequelize, sequelize)
    db.categories = await CategoryModel(Sequelize, sequelize)
    db.courses = await CourseModel(Sequelize, sequelize)
    db.lessons = await LessonModel(Sequelize, sequelize)
    db.paymnets = 

    db.categories.hasMany(db.courses, {
      foreignKey: {
        name: 'category_id',
        allowNull: false
      }
    })
    db.courses.belongsTo(db.categories, {
      foreignKey: {
        name: 'category_id',
        allowNull: false
      }
    })

    db.courses.hasMany(db.lessons, {
      foreignKey: {
        name: 'course_id',
        allowNull: false
      }
    })

    db.lessons.belongsTo(db.courses, {
      foreignKey: {
        name: 'course_id',
        allowNull: false
      }
    })
    sequelize.sync({force: true})
  }
  catch(e){
    console.log('SQL Error', e);
  }
}

main()