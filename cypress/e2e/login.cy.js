describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio'); //Заходим на сайт
         cy.get('#mail').type('german@dolnikov.ru'); //Тапаем по инпуту логина и вводим верный логин
         cy.get('#pass').type('iLoveqastudio1'); //Тапаем по инпуту пароля и вводим верный пароль
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#form > .header').contains('Форма логина'); // Проверяю что присутствует элемент и текст содержится "Форма логина"
         cy.get('#form > .header').should('be.visible'); // Проверяю что текст виден пользователю
         cy.get('#loginButton').click(); //Находим кнопку войти и тапаем
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авторизации вижу текст
         cy.get('#messageHeader').should('be.visible'); // Проверяю что текст "Авторизация прошла успешно" виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю что элемент "Крестик" виден пользователю
     })

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio'); //Заходим на сайт
        cy.get('#mail').type('german@dolnikov.ru'); //Тапаем по инпуту логина и вводим верный логин
        cy.get('#pass').type('iLoveqastudio7'); //Тапаем по инпуту пароля и вводим неверный пароль
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#form > .header').contains('Форма логина'); // Проверяю что присутствует элемент и текст содержится "Форма логина"
        cy.get('#form > .header').should('be.visible'); // Проверяю что текст виден пользователю
        cy.get('#loginButton').click(); //Находим кнопку войти и тапаем
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст "Авторизация прошла успешно" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю что элемент "Крестик" виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio'); //Заходим на сайт
        cy.get('#mail').type('german@dolnikov7.ru'); //Тапаем по инпуту логина и вводим верный логин
        cy.get('#pass').type('iLoveqastudio1'); //Тапаем по инпуту пароля и вводим неверный пароль
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#form > .header').contains('Форма логина'); // Проверяю что присутствует элемент и текст содержится "Форма логина"
        cy.get('#form > .header').should('be.visible'); // Проверяю что текст виден пользователю
        cy.get('#loginButton').click(); //Находим кнопку войти и тапаем
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст "Авторизация прошла успешно" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю что элемент "Крестик" виден пользователю
    })

    it('Проверка что в логине есть @', function () {
        cy.visit('https://login.qa.studio'); //Заходим на сайт
        cy.get('#mail').type('germandolnikov.ru'); //Тапаем по инпуту логина и вводим верный логин без @
        cy.get('#pass').type('iLoveqastudio1'); //Тапаем по инпуту пароля и вводим верный пароль
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#form > .header').contains('Форма логина'); // Проверяю что присутствует элемент и текст содержится "Форма логина"
        cy.get('#form > .header').should('be.visible'); // Проверяю что текст виден пользователю
        cy.get('#loginButton').click(); //Находим кнопку войти и тапаем
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст "Авторизация прошла успешно" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю что элемент "Крестик" виден пользователю
    })

    it('Проверка на востановление пароля', function () {
        cy.visit('https://login.qa.studio'); //Заходим на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#form > .header').contains('Форма логина'); // Проверяю что присутствует элемент и текст содержится "Форма логина"
        cy.get('#form > .header').should('be.visible'); // Проверяю что текст виден пользователю
        cy.get('#forgotEmailButton').click(); // Тапаю кнопку "Востановить пароль"
        cy.get('#forgotForm > .header').contains('Восстановите пароль'); //Проверяю что присутствует элемент и содержится текст "Востановите пароль"
        cy.get('#forgotForm > .header').should('be.visible'); // Проверяю что текст виден пользователю
        cy.get('#mailForgot').type('german@dolnikov.ru'); //Ввожу верную почту для востановления пароля
        cy.get('#restoreEmailButton').click(); //Проверяю что кнопка отправки почты для востановления работает
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); //Проверяю что форма содержит текст
        cy.get('#messageHeader').should('be.visible'); //Проверяю что текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // Проверяю что присутствуется элемент "Крестик" и виден пользователю
    })

    it('Проверка на преведение к строчнм буквам', function () {
        cy.visit('https://login.qa.studio'); //Заходим на сайт
        cy.get('#mail').type('German@dolnikov.ru'); //Тапаем по инпуту логина и вводим верный логин но с заглавными буквами
        cy.get('#pass').type('ILoveqastudio1'); //Тапаем по инпуту пароля и вводим верный пароль но с заглавными буквами
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
        cy.get('#form > .header').contains('Форма логина'); // Проверяю что присутствует элемент и текст содержится "Форма логина"
        cy.get('#form > .header').should('be.visible'); // Проверяю что текст виден пользователю
        cy.get('#loginButton').click(); //Находим кнопку войти и тапаем
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); //Проверяю что после авторизации вижу текст
        cy.get('#messageHeader').should('be.visible'); // Проверяю что текст "Авторизация прошла успешно" виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //Проверяю что элемент "Крестик" виден пользователю
    })

    
 })