function checkDomain(){
    jQuery('#result1').html('');
    jQuery('.load').show();
    jQuery('#link1').hide();
    jQuery('#result').html('');
    var domain = jQuery('#domain').val();
    if(domain==''){
        jQuery('.load').hide();
        jQuery('#result').html('Please enter domain name');
    }
    else {
        jQuery.ajax({
            url:'https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_dM7kvnNsOlsvbWaPgZBIMJwpcKgJh&domainName='+domain,
            success: function(result){
                $data = result.DomainInfo.domainAvailability;
                if($data=='AVAILABLE'){
                    jQuery('.load').hide();
                    jQuery('#result').html('');
                    jQuery('#result1').html('Domain is '+$data);
                    jQuery('#link1').show();
                    jQuery('#link1').attr("href", "https://in.godaddy.com/domainsearch/find?domainToCheck="+domain);
                }
                else {
                    jQuery('.load').hide();
                    jQuery('#result1').html('');
                    jQuery('#result').html('Domain is '+$data);
                }
            }
        })
    }
}