
var listCountries = ['United Kingdom', 'USA', 'Germany', 'France', 'Italy', 'USA', 'Australia', 'Lesotho', 'Canada',
'Argentina', 'Saudi Arabia', 'Mexico', 'Kenya', 'Maldives', 'Venezuela', 'South Africa', 'Sweden', 'India',
'South Africa', 'Italy', 'Pakistan', 'United Kingdom', 'South Africa', 'Greece', 'Cuba', 'South Africa',
'Portugal', 'Austria', 'South Africa', 'Panama', 'USA', 'South Africa', 'Netherlands', 'Switzerland',
'Belgium', 'Israel', 'Cyprus'
];
var listPlans = ['$500', '$1500', '$1000', '$10,000', '$2000', '$3000', '$4000', '$600', '$700', '$2500'];
interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
var run = setInterval(request, interval);

function request() {
clearInterval(run);
interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
var country = listCountries[Math.floor(Math.random() * listCountries.length)];
var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
var msg = 'Someone from <b>' + country +
    '</b> just Withdrew <strong href="javascript:void(0);" onclick="javascript:void(0);">' + plan +
    ' </strong>';
$(".mgm .txt").html(msg);
$(".mgm").stop(true).fadeIn(2);
window.setTimeout(function() {
    $(".mgm").stop(true).fadeOut(100);
}, 1000);
run = setInterval(request, interval);
}

