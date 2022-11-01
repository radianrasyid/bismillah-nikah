const arr = [
    {id: 1, salary: 10},
    {id: 2, salary: 20},
    {id: 3, salary: 30},
  ];

  const sum = arr.reduce((accumulator, object) => {
    return accumulator + object.salary;
  }, 0);

  console.log("SUM", sum);