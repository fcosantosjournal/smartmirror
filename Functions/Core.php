<?php

namespace Functions;

class Core
{
    public function __construct()
    {
        
    }

    public function getIp()
    {
        $url = 'http://meuip.com/api/meuip.php';
        $ip = file_get_contents($url);
        return $ip;
    }

    public function getTemp()
    {
        $url = 'https://api.openweathermap.org/data/2.5/weather?q=Aveiro,pt&APPID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
        $json = file_get_contents($url);
        $data = json_decode($json, true);
        
        /* convert kevin to Celsius */
        $temp = [];
        $temp['c'] = $data['main']['temp'] - 273.15;
        $temp['c'] = round($temp['c'], 1);
        $temp['f'] = $temp['c'] * 9/5 + 32;
        $temp['f'] = round($temp['f'], 1);
        
        return $temp;
    }
}