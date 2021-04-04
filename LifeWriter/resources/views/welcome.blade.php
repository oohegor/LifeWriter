<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Заголовок страницы в браузере -->
        <title>Life Writer</title>
        <link rel="icon" href="../../public/img/favicon.svg" />

        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <!-- Кодировка страницы -->
        <meta http-equiv="Content-type" content="text/html;charset=UTF-8" />
        <!-- Настройки адаптивности страницы  -->
        <meta name="viewport" content="width=device-width,initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

        <!-- SEO -->
        <!-- Краткое описание страницы  -->
        <meta name="description" content="">
        <!-- Ключевые слова страницы  -->
        <meta name="keywords" content="">
        <!-- Управление доступом поисковых роботов к странице -->
        <meta name="robots" content="">

        <!-- Технические -->
        <!-- Автор страницы -->
        <meta name="Author" content="oohegor">
        <!-- Авторские права -->
        <meta name="Copyright" content="oohegor">
        <!-- Редирект (перезагрузка) страницы. Задержка в секундах; url=Адрес сайта/страницы -->
        <meta http-equiv="refresh" content="S; url=URL">
        <!-- Отключает принудительную ссылку у номера телефона на iOS -->
        <meta name="format-detection" content="telephone=no">

    </head>
    <body>
        <div id="app">
        </div>
    </body>
    <!-- Js -->
    <script type="text/javascript" src="js/app.js"></script>
</html>
