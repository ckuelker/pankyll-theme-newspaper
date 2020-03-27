$(document).ready(function(){
    $( "code" ).parent("pre[class=''], pre:not([class])").addClass( "plain" );
    $( "pre.plain").find("code").removeClass( "hljs" );
    $( "p" ).find("code").addClass("code-inline");
    $( "li" ).find("code").addClass("code-inline");
});
