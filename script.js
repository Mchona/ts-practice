window.onload = function() {



    let datas;
    async function callApi() {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      datas = await res.json();
      console.log("================= 1 ================", datas);
      return datas;
    };

    async function handleChange() {
    try {
      const datas = await callApi();
      // テーブルにユーザー情報を追加する
      const ul = document.getElementById("userTable");
      console.log("============ tbody ==============", ul);
      datas.forEach(element => {
        const row = ul.insertRow(-1);
        userName = element.name
        userId = element.id
        console.log("=============== userName ===============", userName);
        row.insertCell(0).textContent = userId
      row.insertCell(1).textContent = userName;
      });
    } catch (error) {
      console.log(error);
    }
  }

  // ボタンにクリックイベントを設定する
  document.getElementById("myButton").onclick = handleChange;
};
