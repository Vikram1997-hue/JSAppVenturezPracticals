//VARIANT 1


// let printList = (list) => {

//     if(list == null) {
//         console.log("Nothing to display");
//         return;
//     }

//     let traverser = list;
//     while(traverser.next != null) {
//         process.stdout.write(`${traverser.value}->`); //to print on same line
//         traverser = traverser.next;
//     }
//     //console.log(""+traverser.value);
//     console.log(`${traverser.value}`);
// };

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

//   printList(list)










//VARIANT 2
let printList = (list) => {

    if(list == null) {
        console.log();
        return;
    }
    
    process.stdout.write(list.value + "\t");
    printList(list.next);
};


let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  printList(list);