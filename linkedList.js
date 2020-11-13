class Node {
  constructor (data, next = null) {
    this.data = data
    this.next = next
  }
}
class LinkedList {
  constructor (head = null) {
    this.head = head
  }
  clear () {
    this.head = null
  }
  getFirst () {
    return this.head
  }
  getLast () {
    let node = this.head
    while (node.next) {
      node = node.next
    }
    return node
  }
  size () {
    let node = this.head
    let count = 0
    while (node) {
      count++
      node = node.next
    }
    return count
  }
  isEmpty () {
    return this.head === null ? true : false
  }
}
const node1 = new Node('item1')
const node2 = new Node('item2')
const node3 = new Node('item3')
const node4 = new Node('item4')
const node5 = new Node('item5')
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5
const ll = new LinkedList(node1)
