const ADMIN_PASSWORD = "jqueryismyjam";
let message;
message = prompt("Pleas input password");


if (message === null) {
  message = "Отменено пользователем!";

} else if (message == ADMIN_PASSWORD) {
  message = "Добро пожаловать";

} else {
  message = "Доступ запрещен, неверный пароль!";

}
alert(message);
