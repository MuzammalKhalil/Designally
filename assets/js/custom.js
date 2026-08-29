

$(document).ready(function(){
    $(document).on('click','.start-project-btn',function(){
        var package_type = $(this).data('package-type');
        var get_pkg_name = '';
        var get_pkg_payment = '';
        
        if(package_type == "logo" || package_type == "web" || package_type == "other" ){
            get_pkg_name = $(this).parent('.pkg-min-box').find('.package-name').text().replace(/\s+/g, " ");
            get_pkg_payment = $(this).parent('.pkg-min-box').find('.package-price').text();
        }else if(package_type == "combo"){
            get_pkg_name = $(this).data('combopkg');
            get_pkg_payment = $(this).parent('.get-combo').find('.package-price').text();
        }
        
        
        $('.get_pkg_name').val(get_pkg_name);
        $('.get_pkg_price').val(get_pkg_payment);
        $('.get_pkg_type').val(package_type);
        
    });
    
    
    $(document).on('click','.combo-start-project-btn',function(){
        var package_type = $(this).data('package-type');
        var get_pkg_name = '';
        var get_pkg_payment = '';
        
        $('.get_pkg_name').val($(this).parent('.pkg-min-box').find('.package-name').text().replace(/\s+/g, " "));
        $('.get_pkg_price').val($(this).parent('.pkg-min-box').find('.package-price').text());
        $('.get_pkg_type').val(package_type);
        
    });
});


 // setInterval(function () {
           //  $('#modal').modal('show');
           //      }, 5000);
           $(document).ready(function(){
            var y = 1;
            
                setInterval(function () {
                  if(y == 1){
                     y = 0;
                     $('#modal').show();
                   }
                }, 2000);
            
           });

           $(document).on('click','.new-custom-close',function(){
            $('#modal').hide(); 
           });
           
           
          function showPopup() {        
            $(document).ready(function() {
                $("#modal").show();
             });
            return false;
   };

  