


// const tableD = document.getElementById('tableData');


window.addEventListener('load', () => {
    var namesData = [];
    var names = [];
    var nameend = '';

    cl = (any) => {
        return console.log(any);
    };
    $(document).ready(function() {
        $("#btn").click(function(){
            searchAction();
        });
    });
    let strLink = 'http://nbrpro.me/nbrpro_handler/search/s_n_1?devuid=D1BF72E3-AE3A-4777-8464-A6AB695C1310&fcntry=+966&nid=';
    let field = document.getElementById('field');

    let number = field.value;

    let fullLink = 'http://nbrpro.me/nbrpro_handler/search/s_n_1?devuid=D1BF72E3-AE3A-4777-8464-A6AB695C1310&fcntry=+966&nid=' + number;

    let btn = document.getElementById('btn');


   let searchAction = function (){
       // nameend = '';
        fetch('http://nbrpro.me/nbrpro_handler/search/s_n_1?devuid=D1BF72E3-AE3A-4777-8464-A6AB695C1310&fcntry=+966&nid=' + field.value)
            .then(function (res){
                return res.json();
            }).then(function (json) {
            console.log(json.t)
            namesData = json.t;
            // gitNames()
            newF();
        });
    }
    let newF = function (){
        namesData.forEach(function (nin){
            nameend += '<tr><td>' + nin.Name + '</tr></td>'
        });
        console.log(nameend);
        document.getElementById('tableData').innerHTML = nameend;
    }
});






function gitNames() {

        let tt = document.getElementById('tableData');
    for (let i = 0; i <= namesData.length; i ++){

        var name = namesData[i].Name;
        nameend += '<tr><td>' + name + '</tr></td>';
        console.log(nameend);
    }
    console.log(nameend);
    document.getElementById('tableData').innerHTML = nameend;
}
//     for (let i = 0; i < namesData.length; i ++){
//         const name = namesData[i].Name;
//         names.push(name);
//         let t = document.getElementById('tableData');
//         t.innerHTML = `<tr><td>${name}</td></tr>`
//
//     }
//     console.log(`names: ${names}`);
// }




// console.log(namesData);
/*
 <!--<script>-->
        var requestOptions = {-->
    <!--        method: 'GET',-->
    <!--        redirect: 'manual'-->
    <!--    };-->

    <!--    fetch("http://nbrpro.me/nbrpro_handler/search/s_n_1?devuid=D1BF72E3-AE3A-4777-8464-A6AB695C1310&fcntry=+966&nid=550880999")-->
    <!--        .then(function (res){-->
    <!--            console.log(res);-->
    <!--        });-->
    <!--</script>-->
 */