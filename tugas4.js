var tb1 = 60;
var tb2 = 90;
var tb3 = 70;


if(tb1 > tb2){
    if (tb2 > tb3) {
        console.log("Siswa tb1 memiliki berat badan tertinggi");
        console.log("===========");
        console.log("urutan tb terbesar ke terkcil : ", tb1, ">", tb2, ">", tb3);
    } else if(tb1 < tb3) {
        console.log("Siswa tb3 memiliki berat badan tertinggi");
        console.log("===========");
        console.log("urutan tb terbesar ke terkcil : ", tb3, ">", tb1, ">", tb2);
    }else{
        console.log("Siswa tb1 memiliki berat badan tertinggi");
        console.log("===========");
        console.log("urutan tb terbesar ke terkcil : ", tb1, ">", tb3, ">", tb2);
    }
} else if(tb2 > tb1){
    if (tb1 > tb3) {
        console.log("Siswa tb2 memiliki berat badan tertinggi");
        console.log("===========");
        console.log("urutan tb terbesar ke terkcil : ", tb2, ">", tb1, ">", tb3);
    } else if(tb2 < tb3) {
        console.log("Siswa tb3 memiliki berat badan tertinggi");
        console.log("===========");
        console.log("urutan tb terbesar ke terkcil : ", tb3, ">", tb2, ">", tb1);
    }else{
        console.log("Siswa tb2 memiliki berat badan tertinggi");
        console.log("===========");
        console.log("urutan tb terbesar ke terkcil : ", tb2, ">", tb3, ">", tb1);
    }
}