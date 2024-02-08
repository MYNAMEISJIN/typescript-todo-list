class Todo { // class 만들기.
  id: string; //타입지정
  text: string;//타입지정

  constructor(todoText: string) {// class 안에 함수.
    this.text = todoText;
    this.id = new Date().toISOString();
  }
}

export default Todo;