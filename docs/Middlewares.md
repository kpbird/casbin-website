---
id: middlewares
title: Middlewares
---

### Web frameworks

<!--DOCUSAURUS_CODE_TABS-->

<!--Go-->
Name | Description
----|----
[Gin](https://github.com/gin-gonic/gin) | A HTTP web framework featuring a Martini-like API with much better performance, via plugin: [authz](https://github.com/gin-contrib/authz)
[Beego](https://github.com/astaxie/beego) | An open-source, high-performance web framework for Go, via built-in plugin: [plugins/authz](https://github.com/astaxie/beego/blob/master/plugins/authz)
[Caddy](https://github.com/mholt/caddy) | Fast, cross-platform HTTP/2 web server with automatic HTTPS, via plugin: [caddy-authz](https://github.com/casbin/caddy-authz)
[Go kit](https://github.com/go-kit/kit) | A toolkit for microservices, via built-in plugin: [plugins/authz](https://github.com/go-kit/kit/tree/master/auth/casbin)
[Revel](https://github.com/revel/revel) | A high productivity, full-stack web framework for the Go language, via plugin: [auth/casbin](https://github.com/revel/modules/tree/master/auth/casbin)
[Echo](https://github.com/labstack/echo) | High performance, minimalist Go web framework, via plugin: [echo-authz](https://github.com/labstack/echo-contrib/tree/master/casbin) (thanks to [@xqbumu](https://github.com/xqbumu)) or [casbinrest](https://github.com/prongbang/casbinrest) (thanks to [@prongbang](https://github.com/prongbang))
[Iris](https://github.com/kataras/iris) | The fastest web framework for Go in (THIS) Earth. HTTP/2 Ready-To-GO, via plugin: [casbin](https://github.com/iris-contrib/middleware/tree/master/casbin) (thanks to [@hiveminded](https://github.com/hiveminded))
[Negroni](https://github.com/urfave/negroni) | Idiomatic HTTP Middleware for Golang, via plugin: [negroni-authz](https://github.com/casbin/negroni-authz)
[Chi](https://github.com/pressly/chi) | A lightweight, idiomatic and composable router for building HTTP services, via plugin: [chi-authz](https://github.com/casbin/chi-authz)
[Buffalo](https://github.com/gobuffalo/buffalo) | A Go web development eco-system, designed to make your life easier, via plugin: [buffalo-mw-rbac](https://github.com/kgosse/buffalo-mw-rbac) (thanks to [@kgosse](https://github.com/kgosse))
[Macaron](https://github.com/go-macaron/macaron) | A high productive and modular web framework in Go, via plugin: [authz](https://github.com/go-macaron/authz)
[DotWeb](https://github.com/devfeel/dotweb) | Simple and easy go web micro framework, via plugin: [authz](https://github.com/devfeel/middleware/tree/master/authz)
[Tango](https://github.com/lunny/tango) | Micro & pluggable web framework for Go, via plugin: [authz](https://github.com/tango-contrib/authz)
[Baa](https://github.com/go-baa/baa) | An express Go web framework with routing, middleware, dependency injection and http context, via plugin: [authz](https://github.com/baa-middleware/authz)

<!--Java-->
Name | Description
----|----
[Spring Boot](https://projects.spring.io/spring-boot/) | Makes it easy to create Spring-powered applications and services, via plugin: [casbin-spring-boot-starter](https://github.com/jcasbin/casbin-spring-boot-starter) or [jcasbin-springboot-plugin](https://github.com/jcasbin/jcasbin-springboot-plugin) or [Spring's Method Security RBAC Demo](https://github.com/jveverka/java-11-examples/tree/master/spring/spring-jcasbin)
[Vert.x](https://vertx.io/) | A tool-kit for building reactive applications on the JVM, via plugin: [vertx-auth-jcasbin](https://github.com/vert-x3/vertx-auth/pull/215)
[JFinal](http://www.jfinal.com/) | A simple, light, rapid, independent and extensible Java WEB + ORM framework, via plugin: [jcasbin-jfinal-plugin](https://github.com/jcasbin/jcasbin-jfinal-plugin)
[Nutz](https://nutzam.com/) | Web framework (MVC/IOC/AOP/DAO/JSON) for all Java developers, via plugin: [jcasbin-nutz-plugin](https://github.com/jcasbin/jcasbin-nutz-plugin)
[mangoo I/O](https://github.com/svenkubiak/mangooio) | An intuitive, lightweight, high performance full stack Java web framework, via built-in plugin: [AuthorizationService.java](https://github.com/svenkubiak/mangooio/blob/e8c647a3f7c427bce27377025bec074f6d767f50/mangooio-core/src/main/java/io/mangoo/services/AuthorizationService.java)

<!--Node.js-->
Name | Description
----|----
[Express](https://github.com/expressjs/express) | Fast, unopinionated, minimalist web framework for node, via plugin: [express-authz](https://github.com/node-casbin/express-authz)
[Koa](https://github.com/koajs/koa) | Expressive middleware for node.js using ES2017 async functions, via plugin: [koa-authz](https://github.com/node-casbin/koa-authz) or [koajs-starter](https://github.com/djordjep/koajs-starter)
[Egg](https://github.com/eggjs/egg) | Born to build better enterprise frameworks and apps with Node.js & Koa, via plugin: [egg-authz](https://github.com/node-casbin/egg-authz) or [egg-zrole](https://github.com/klren0312/egg-zrole)
[Nest](https://nestjs.com/) | Progressive Node.js framework for building efficient and scalable server-side applications on top of TypeScript & JavaScript. via plugin: [nt-casbin](https://github.com/notadd/nt-casbin) or [nest-casbin](https://github.com/pardjs/nest-casbin)
[Casbin JWT Express](https://github.com/tiagostutz/casbin-jwt-express) | Authorization middleware that uses stateless JWT token to validate ACL rules using Casbin

<!--PHP-->
Name | Description
----|----
[Laravel](https://laravel.com/) | The PHP framework for web artisans, via plugin: [laravel-casbin](https://github.com/php-casbin/laravel-casbin)
[Yii PHP Framework](https://www.yiiframework.com/) | A fast, secure, and efficient PHP framework, via plugin: [yii-casbin](https://github.com/php-casbin/yii-casbin)
[CakePHP](https://cakephp.org/) | Build fast, grow solid PHP Framework, via plugin: [cake-casbin](https://github.com/php-casbin/cake-casbin)
[ThinkPHP 5.1](http://www.thinkphp.cn/) | The ThinkPHP 5.1 framework, via plugin: [think-casbin](https://github.com/php-casbin/think-casbin)
[ThinkPHP 6.0](http://www.thinkphp.cn/) | The ThinkPHP 6.0 framework, via plugin: [think-authz](https://github.com/php-casbin/think-authz)
[Symfony](https://symfony.com/) | The Symfony PHP framework, via plugin: [symfony-casbin](https://github.com/videni/symfony-casbin)

<!--Python-->
Name | Description
----|----
[Django](https://www.djangoproject.com/) | A high-level Python Web framework, via plugin: [django-casbin](https://github.com/pycasbin/django-casbin)
[Flask](http://flask.pocoo.org/) | A microframework for Python based on Werkzeug, Jinja 2 and good intentions, via plugin: [flask-casbin](https://github.com/pycasbin/flask-casbin)

<!--END_DOCUSAURUS_CODE_TABS-->
