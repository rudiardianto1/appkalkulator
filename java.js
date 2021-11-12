function insert(num) {
    document.form.view.value = document.form.view.value + num;
}
function C() {
    document.form.view.value = "";
}
function d() {
    var nilai = document.form.view.value;
    document.form.view.value = nilai.substring(0, nilai.length - 1);
}
/**menggunakan function equal karena berfungsi untuk mengeksekusi semua yang akan dimasukan ke tombol */
function equal() {
    var hasil = document.form.view.value;
    document.form.view.value = eval(hasil);
}