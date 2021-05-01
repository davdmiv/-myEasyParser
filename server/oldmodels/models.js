import sequelize from '../db.js'
import pkg from 'sequelize'
const { DataTypes } = pkg

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
  nikname: { type: DataTypes.STRING, defaultValue: 'noname' },
})

const Rule = sequelize.define('rule', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true },
  url: { type: DataTypes.TEXT },
  shrub_rule: { type: DataTypes.STRING },
  shrub_cache: { type: DataTypes.STRING },
  frequency: { type: DataTypes.DATE },
  page_type: { type: DataTypes.STRING },
  page_changed: { type: DataTypes.DATE },
  last_check: { type: DataTypes.DATE },
  duration: { type: DataTypes.TIME },
  public: { type: DataTypes.BOOLEAN },
  description: { type: DataTypes.TEXT },
  activate_cnt: { type: DataTypes.INTEGER },
})

const ChangeNote = sequelize.define('change_note', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  screenshot_attachment: { type: DataTypes.TEXT },
  html_attachment: { type: DataTypes.TEXT },
  check_datetime: { type: DataTypes.DATE },
})

User.hasMany(Rule)
Rule.belongsTo(User)

Rule.hasMany(ChangeNote)
ChangeNote.belongsTo(Rule)

export default { User, Rule, ChangeNote }
