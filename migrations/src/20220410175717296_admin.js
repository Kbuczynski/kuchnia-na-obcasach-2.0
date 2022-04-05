exports.up = pgm => {
  pgm.createTable('admin', {
    id: {
      type: 'serial',
      primaryKey: true
    },
    name: {
      type: 'text',
      notNull: true,
      unique: true
    },
    email: {
      type: 'text',
      notNull: true,
      unique: true
    },
    password: {
      type: 'text',
      notNull: true
    }
  })

  pgm.sql(`
    INSERT INTO admin VALUES (1, 'admin', 'admin@admin.com', '12345678');
  `)
}

exports.down = pgm => {
  pgm.sql('DELETE FROM admin;')
  pgm.dropTable('admin')
}
