<?php include 'templates/template_head.php'; ?>
    <title>sWord</title>

    <link href='http://fonts.googleapis.com/css?family=Audiowide' rel='stylesheet' type='text/css'>
    <!-- CSS local -->
    <link href="css/home.css" rel="stylesheet" type="text/css">

    <script type="text/javascript" src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <!-- JS local -->
    <script type="text/javascript" src="js/home.js"></script>
</head>
<script>
$(document).ready(function(){
    pegarValor();
});
</script>
<body>
    <header id="topo"></header>
    <section id="container">
        <div id="body-site">
            <h1>SWORD</h1>
            <input type="text" id="home" x-webkit-speech placeholder="Home" onwebkitspeechchange="pegarValor()" speech required >
        </div>
    </section>
<?php include 'templates/template_rodape.php'; ?>
