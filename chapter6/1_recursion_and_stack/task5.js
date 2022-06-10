//VARIANT 1
let printList = (list) => {

    //In a Linked List, you only have access to head and can reach subsequent nodes only through head.
    //So, I have decided to reverse the Linked List and then do a regular traversal+print.
    
    //reversal
    if(list == null) {
        console.log("Nothing to display");
        return;
    }

    if(list.next == null) {
        console.log(list.value);
        return
    }

    let prev = null;
    let curr = list;
    let next = list.next;

    while(next != null) {
        curr.next = prev;
        prev = curr;
        curr = next;
        next = curr.next;
    }
    curr.next = prev;


    //printing
    let traverser = curr;
    while(traverser.next != null) {
        process.stdout.write(`${traverser.value}->`); //to print on same line
        traverser = traverser.next;
    }
    console.log(`${traverser.value}`);
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

printList(list)










// //VARIANT 2
// let printList = (list) => {

//     if(list == null) 
//         return;
    
    
//     printList(list.next);
//     console.log(list.value + "\t");
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
//   printList(list);