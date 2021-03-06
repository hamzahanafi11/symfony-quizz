var qcm = [
    {
        "number" : 1,
        "question" : "What scheme/convention does Symfony use for versioning the framework and its components?",
        "choices" : [
            { "choice" : "Triple-sequence-incrementation", "index" : 1},
            { "choice" : "The PSR-0 versioning standard from PHP-FIG group", "index" : 2},
            { "choice" : "Semantic versioning", "index" : 3},
            { "choice" : "API-Compat versioning", "index" : 4}
        ]
    },
    {
        "number" : 2,
        "question" : "Which of the following commands do you have to use to debug the container?",
        "choices" : [
            { "choice" : "container:debug", "index" : 1},
            { "choice" : "debug:container", "index" : 2},
            { "choice" : "container --debug", "index" : 3},
            { "choice" : "debug –container", "index" : 4}
        ]
    },
    {
        "number" : 3,
        "question" : "How do you define the routing configuration in order to match the following URI?",
        "choices" : [
            { "choice" : "user_edit:\n   path: /user/{id}\n   methods: [POST, PUT]\n   schemes: https\n   requirements: { \'id\': \'\\d+\' }", "index" : 1},
            { "choice" : "user_edit:\n   pattern: /user/{id}\n   requirements: { '_method': 'POST|PUT', '_scheme': 'https', 'id': '\\d+' }", "index" : 2},
            { "choice" : "user_edit:\n   uri: /user/{id}\n   verbs: [POST, PUT]\n   protocols: https\n   requirements: { 'id': '\\d+' }", "index" : 3},
            { "choice" : "user_edit:\n   uri: /user/{id}\n   requirements: { '_verb': 'POST|PUT', '_protocol': 'https', 'id': '\\d+' }", "index" : 4}
        ]
    },
    {
        "number" : 4,
        "question" : "Given the following controller: \n \n\n" +
        "class DemoController\n" +
        "{\n" +
        "    public function homeAction()\n" +
        "   {\n" +
        "   }\n" +
        "}\n" +
        "\n\n" +
        "and configuration:\n\n" +
        "services:\n" +
        "     demo.home.controller:\n" +
        "       class: 'DemoBundle\\Controller\\DemoController'\n" +
        "\n \n" +
        "Which of the following routing configurations will map the \"/home\" URL to the \"homeAction\" method?",
        "choices" : [
            { "choice" : "home:\n     path: /home\n     defaults: {_controller: 'demo.home.controller:homeAction'}\n     methods: [GET]", "index" : 1},
            { "choice" : "home:\n      path: /home\n      defaults: { _controller: 'DemoBundle:Demo:home' }\n      methods: [GET]", "index" : 2},
            { "choice" : "Both answers.", "index" : 3},
            { "choice" : "None of these answers.", "index" : 4}
        ]
    },
    {
        "number" : 5,
        "question" : "What does the \"php bin/console list doctrine\" console command do?",
        "choices" : [
            { "choice" : "It will return a list of doctrine enabled features", "index" : 1},
            { "choice" : "It will return a list of doctrine available commands", "index" : 2},
            { "choice" : "It will list all doctrine usages on the project", "index" : 3},
            { "choice" : "It will return an error", "index" : 4},
            { "choice" : "Nothing will happen", "index" : 5}
        ]
    },
    {
        "number" : 6,
        "question" : "Which of the following types of dependency injection are accepted in Symfony?",
        "choices" : [
            { "choice" : "Constructor Injection", "index" : 1},
            { "choice" : "Setter Injection", "index" : 2},
            { "choice" : "Property Injection", "index" : 3},
            { "choice" : "Both Constructor Injection and Setter Injection", "index" : 4},
            { "choice" : "Both Constructor Injection and Property Injection", "index" : 5},
            { "choice" : "All three injection types (Constructor, Setter, Property)", "index" : 6}
        ]
    },
    {
        "number" : 7,
        "question" : "How can you access environment variables in YAML configuration files in Symfony 3.2?",
        "choices" : [
            { "choice" : "password: \"%env(DB_PASSWORD)%\"", "index" : 1},
            { "choice" : "password: \"%printenv(DB_PASSWORD)%\".", "index" : 2},
            { "choice" : "password: \"%envvar(DB_PASSWORD)%\"", "index" : 3},
            { "choice" : "password: \"%var(DB_PASSWORD)%\"", "index" : 4},
            { "choice" : "You cannot access environment variables in configuration files.", "index" : 5}
        ]
    },
    {
        "number" : 8,
        "question" : "Can you run a Symfony console command from another Symfony console command?",
        "choices" : [
            { "choice" : "Yes, with $command->execute($input, $output);", "index" : 1},
            { "choice" : "Yes, with $command->run($input, $output);", "index" : 2},
            { "choice" : "Yes, with $command->call($input, $output);", "index" : 3},
            { "choice" : "Yes, with $command->forward($input, $output);", "index" : 4},
            { "choice" : "No, a console command can only be run from the console.", "index" : 5}
        ]
    },
    {
        "number" : 9,
        "question" : "How do you mark a service as private using the YAML syntax?",
        "choices" : [
            { "choice" : "type: private", "index" : 1},
            { "choice" : "scope: private", "index" : 2},
            { "choice" : "public: false", "index" : 3},
            { "choice" : "private: true", "index" : 4}
        ]
    },
    {
        "number" : 10,
        "question" : "Given this service: \n\n" +
        "services:\n" +
        "   my_service:\n" +
        "       class: MyClass\n" +
        "\n" +
        "How do you make sure that each time you inject or retrieve the 'my_service'\nservice from the container you get a new instance of it?",
        "choices" : [
            { "choice" : "It is the default behaviour in Symfony3", "index" : 1},
            { "choice" : "services: \n &nbsp;    my_service:\n &nbsp;   &nbsp;       class: MyClass\n &nbsp;   &nbsp;             shared: false", "index" : 2},
            { "choice" : "services:\n &nbsp;        my_service:\n &nbsp;   &nbsp;             class: MyClass\n  &nbsp;   &nbsp;            tags:\n  &nbsp;   &nbsp;            - { name: kernel.new }", "index" : 3},
            { "choice" : "services:\n &nbsp;         my_service:\n &nbsp; &nbsp;             class: MyClass\n &nbsp; &nbsp;             calls: \n &nbsp; &nbsp;             - [__constructor]", "index" : 4}
        ]
    },
    {
        "number" : 11,
        "question" : "How do you define your to-be-injected service so that it instantiates inside your object\nonly when used (when methods are called from the service)?",
        "choices" : [
            { "choice" : "services:\n &nbsp;       my_service:\n &nbsp; &nbsp;            class: MyClass\n &nbsp; &nbsp;           tags:\n &nbsp; &nbsp;               - { name: kernel.lazy}", "index" : 1},
            { "choice" : "services:\n &nbsp;         my_service:\n  &nbsp; &nbsp;             class: MyClass\n  &nbsp; &nbsp;             lazy: true.", "index" : 2},
            { "choice" : "services:\n &nbsp;          my_service:\n &nbsp; &nbsp;             class: MyClass\n &nbsp; &nbsp;             instance: lazy\n", "index" : 3},
            { "choice" : "It is the default behavior in Symfony3", "index" : 4}
        ]
    }
    ,
    {
        "number" : 12,
        "question" : "Given the following service definitions in this order: \n\n" +
        "services:\n" +
        "    service.one:\n" +
        "          class: 'My\\Namespace\\One'\n" +
        "          tags:\n" +
        "                  - { name: 'kernel.event_listener', event: 'kernel.request' }\n" +
        "    service.two:\n" +
        "          class: 'My\\Namespace\\Two'\n" +
        "          tags:\n" +
        "                  - { name: 'kernel.event_listener', event: 'kernel.request' }\n" +
        "\n\n" +
        "In what order will service methods be called when the \"kernel.request\" event is fired?",
        "choices" : [
            { "choice" : "service.one then service.two", "index" : 1},
            { "choice" : "service.two then service.one", "index" : 2},
            { "choice" : "Symfony will launch a compilation error because priorities are not defined", "index" : 3},
            { "choice" : "The order will be inconsistent across multiple executions\nbecause priorities are not defined", "index" : 4}
        ]
    }
    ,
    {
        "number" : 13,
        "question" : "When serializing/deserializing data using the Serializer component,\nwhich data-structure handled by the Normalizers/Denormalizers is used to mediate this process?",
        "choices" : [
            { "choice" : "There is no intermediary structure.\nThe objects are directly converted to/from the specified format", "index" : 1},
            { "choice" : "A \"\\stdClass\" PHP generic object is created and filled in with all the object's properties", "index" : 2},
            { "choice" : "A SerializationTree object is created, which is recursively filled in with the object\nand all its sub-objects", "index" : 3},
            { "choice" : "An array representation is used as an intermediary data-structure", "index" : 4}
        ]
    },
    {
        "number" : 14,
        "question" : "What Symfony component helps with mocking clock and network related native PHP functions?",
        "choices" : [
            { "choice" : "The Test Component", "index" : 1},
            { "choice" : "The PHPUnit Bridge", "index" : 2},
            { "choice" : "The Debug Component", "index" : 3},
            { "choice" : "The Config Component", "index" : 4}
        ]
    },
    {
        "number" : 15,
        "question" : "What happens if you have the following route and you try to use it inside the code like this?\n" +
        "\n" +
        "my_route:\n" +
        "    pattern: /bla/foo/{param1}/{param2}\n" +
        "    defaults: {_controller: my_controller: doStuffAction}\n" +
        "    requirements:\n" +
        "        _method  : GET\n" +
        "\n" +
        "$this-&gt;get('router')-&gt;generate('my_route', array(\n" +
        "   'param3' =&gt; 'Laravel',\n" +
        "   'param2' =&gt; 'Symfony',\n" +
        "   'param1' =&gt; 'Zend'\n" +
        "));",
        "choices" : [
            { "choice" : "An internal error is launched because you have passed too many parameters", "index" : 1},
            { "choice" : "You will get a 404 because it will try to create a new /bla/foo/{param1}/{param2}/{param3}\nroute that does not exist.", "index" : 2},
            { "choice" : "The extra parameter will be set as a query parameter", "index" : 3},
            { "choice" : "An internal error will be launched because the order of the parameters is wrong", "index" : 4}
        ]
    },
    {
        "number" : 16,
        "question" : "What type of instance is returned when you make a request\nusing the Symfony\\Component\\BrowserKit\\Client (used on functional test)?",
        "choices" : [
            { "choice" : "Symfony\Component\DomCrawler\Crawler", "index" : 1},
            { "choice" : "Symfony\Component\HttpFoundation\Response", "index" : 2},
            { "choice" : "Symfony\Component\HttpFoundation\Content", "index" : 3},
            { "choice" : "\DOMDocument", "index" : 4}
        ]
    },
    {
        "number" : 17,
        "question" : "How do you create a `CacheItem` object? \n\n" +
        "use Symfony\\Component\\Cache\\Adapter\\FilesystemAdapter;\n" +
        "$cache = new FilesystemAdapter();",
        "choices" : [
            { "choice" : "$item = $cache->create('news');", "index" : 1},
            { "choice" : "$item = $cache->get('news');", "index" : 2},
            { "choice" : "$item = $cache->createItem('news');", "index" : 3},
            { "choice" : "$item = $cache->getItem('news');", "index" : 4}
        ]
    },
    {
        "number" : 18,
        "question" : "How do you enable validation via annotations in Symfony3?",
        "choices" : [
            { "choice" : "You cannot use annotations to define validation rules", "index" : 1},
            { "choice" : "Annotations are supported by default", "index" : 2},
            { "choice" : "# app/config/config.yml\n  &nbsp;   framework:\n  &nbsp; &nbsp;        validation: { enable_annotations: true }", "index" : 3},
            { "choice" : "# app/config/config.yml\n &nbsp;    framework:\n &nbsp; &nbsp;        validation: [annotation]", "index" : 4}
        ]
    },
    {
        "number" : 19,
        "question" : "What component introduced in Symfony 3.1 is an implementation of the PSR-6 standard?",
        "choices" : [
            { "choice" : "The Cache Component", "index" : 1},
            { "choice" : "The Workflow Component", "index" : 2},
            { "choice" : "The PHPUnit Bridge", "index" : 3},
            { "choice" : "The Logger Component", "index" : 4}
        ]
    },
    {
        "number" : 20,
        "question" : "Which of the following methods of the `Symfony\\Component\\HttpFoundation\\Request` class was\nintroduced in Symfony 3.2?",
        "choices" : [
            { "choice" : "isMethodSafe()", "index" : 1},
            { "choice" : "isSecure()", "index" : 2},
            { "choice" : "isMethodIdempotent()", "index" : 3},
            { "choice" : "isNoCache()", "index" : 4}
        ]
    }
];