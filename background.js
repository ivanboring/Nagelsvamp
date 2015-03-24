 $(window).ready(function() {
    setInterval(function() {
        if($("#disqus-urls").length > 0) {
            //var x = JSON.parse($('#disqus-urls').html());
            //console.log(x);
            $(".publisher-anchor-color a").each(function( index ) {
                if($(this).data('username') == 'disqus_MtR7QSWMGR' && $(this).html != 'I am Groot!') {
                    $(this).html('I am Groot!');
                }
            });
            $(".avatar .user img").each(function( index ) {
                if($(this).data('user') == 46277016 && $(this).attr('src') != 'http://thumbs.ebaystatic.com/d/l96/m/muB5VRgn2-1EveLazPHfNBA.jpg') {
                    $(this).prop('src', 'http://thumbs.ebaystatic.com/d/l96/m/muB5VRgn2-1EveLazPHfNBA.jpg');
                }
            });            
        }
    }, 1000);
 });