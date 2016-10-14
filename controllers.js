(function() {
  console.log('test');

  const app = angular.module('classApp');

  app.controller('DataControl', function() {

    this.data = [
      {id: 1,
        teacher: 'Joe Dirt',
        class: 'Biology',
        students: [
          {
            first_name: 'Adam',
            last_name: 'Franzen',
            grade: 'B+'
          },
          {
            first_name: 'Isaac',
            last_name: 'Collier',
            grade: 'A-'
          }
        ]
      },
      {id: 2,
        teacher: 'Bob Smith',
        class: 'History',
        students: [
          {
            first_name: 'Isaac',
            last_name: 'Miller',
            grade: 'A'
          }
        ]
      },
      {id: 3,
        teacher: 'Liz Gonzalez',
        class: 'Chemistry',
        students: [
          {id: 4,
            first_name: 'Jordon',
            last_name: 'Hoshor',
            grade: 'A+'
          }
        ]
      },
      {id: 4,
        teacher: 'Lauren Hill',
        class: 'English',
        students: [
          {id: 5,
            first_name: 'Shane',
            last_name: 'Pittman',
            grade: 'A-'
          }
        ]
      }
    ];



    // this.class = {
    //   class_name: '',
    //   teacher_name: ''
    // };
    //
    // this.addClass = function(newClass) {
    //   console.log('!', newClass);
    //   // this.class.push(newClass);
    // };
  });

  app.controller('AddControl', function() {
    console.log(this);
    this.addClass = function(newClass) {
      console.log(newClass);
    };
  });

})();
