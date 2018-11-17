<?php
// Check for empty fields
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(!empty($request) || $request != ''){
    if($request->prime){
            $num = intval($request->prime);
            for($i=1;$i<=$num;$i++){
                $response = 0;
                for($j=1;$j<=$i;$j++){
                    if($i%$j == 0){
                        $response++;
                    }
                }
            }
            if($response==2){
                print 1;
         }
    }
    else if($request->fibo){
        $num = intval($request->fibo);
        $num1= 0;
        $num2= 1;
        $series = [];
        for($i=2;$i<=$num;$i++){
            $series[] = $num3 = $num1 + $num2;
            $num1 = $num2;
            $num2 = $num3;
        }
        $ser['fibo'] = $series;
        print_r(json_encode($ser));
    }
    else if($request->palindrome){
        $string =$request->palindrome;
        //remove all spaces
    $string = str_replace(' ', '', $string);

    //remove special characters
    $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string);

    //change case to lower
    $string = strtolower($string);

    //reverse the string
    $reverse = strrev($string);

    if ($string == $reverse) {
        echo 1;
    } 
    else {
        echo 0;
    }
        
    }
}

?>

