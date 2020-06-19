import { LinkedList } from "../0X_linked_list";

test("Create a linked list", () => {
  const list = new LinkedList();
  list.add("red");
  list.add("orange");
  list.add("yellow");

  // get the second item in the list
  console.log(list.get(1)); // "orange"

  // print out all items
  for (const color of list) {
    console.log(color);
  }

  // remove the second item in the list
  console.log(list.remove(1)); // "orange"

  // get the new first item in the list
  console.log(list.get(1)); // "yellow"
});
