app.get('/watable', function(req, res, next) {
  res.render('watable');
});

app.get('/data.json', function(req, res, next) {
  UserModel.find({}, 'email firstname lastname', function(err, users) {
    if (err) return next(err);

    var rows = [];
    for (var i = 0, len = users.length; i < len; i++) {
      user = users[i];
      user = user.toObject();
      user.actions = ("<a href='/admin/users/" + user._id + "/edit' class='btn btn-mini user-edit'><i class='icon-pencil'></i></a> ") +
        ("<a href='/admin/users/" + user._id + "/delete' class='btn btn-mini btn-danger user-delete' onClick='return confirm(\"Are you sure you want to delete this user?\");'><i class='icon-trash'></i></a> ");
      rows.push(user);
    }

    var data = {
      cols: {
        actions: {
          index: 1,
          type: 'string',
          friendly: 'Actions',
          tooltip: 'You might need<br>permissions to edit<br>or delete an user'
        },
        email: {
          index: 2,
          type: 'string',
          friendly: 'E-mail',
          unique: true,
          tooltip: 'Please do not remove<br>this column if you<br>intend to download<br>a CSV, since it\'s<br>a key column'
        },
        firstname: {
          index: 3,
          type: 'string',
          friendly: 'First name'
        },
        lastname: {
          index: 4,
          type: 'string',
          friendly: 'Last name'
        }
      },
      rows: rows
    };

    res.json(data);
  });
});
