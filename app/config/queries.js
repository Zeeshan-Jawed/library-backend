const knex = require('./connectdb'); // the connection!

module.exports = {
  getAll(table) {
    if(table==='students'){
        return knex(table)
    }
    else if(table==='books'){
        return knex.select('*','students.first_name as borrowed_by').from ('books')
    .join('students','students.id','=','books.borrowed_by')
  }
  },
  getOne(table,id) {
    
    if(table==='students'){
      return knex(table).where('id', id).first();
  }
  else if(table==='books'){
      return knex.select('*').from ('books')
      .join('students','students.id','books.borrowed_by').where('students.id',id).first()
}
  },
  create(table,obj) {
    return knex(table).insert(obj, '*');
  },
  update(table,id, obj) {
    
    return knex(table).where('id', id).update(obj, '*');
   
  },
  delete(table,id) {
    return knex(table).where('id', id).del();
  }
}