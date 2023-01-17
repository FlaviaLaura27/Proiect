const sequelize = require("./database");
const {DataTypes} = require("sequelize")

const Note = sequelize.define("notes", {
    idNote: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idSubject: {
        type: DataTypes.INTEGER,
        foreignKey: true
    },
    date: {
        type: DataTypes.DATE,
    },
    title: {
        type: DataTypes.STRING,
    },
    information: {
        type: DataTypes.STRING,
    },
    idNoteMedia: {
        type: DataTypes.INTEGER,
        foreignKey: true
    }
})

module.exports = Note;