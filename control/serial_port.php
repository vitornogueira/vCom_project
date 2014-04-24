<?php

if ($_POST['valor'] == "a") {
    exec('echo a > COM3');
}
if ($_POST['valor'] == "b") {
    exec('echo b > COM3');
}

?>
