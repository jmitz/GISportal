<?php 

$wmsURL="http://rsg.pml.ac.uk/ncWMS/wms?";
$wmsGetCapabilites = $wmsURL."SERVICE=WMS&REQUEST=GetCapabilities&VERSION=1.3.0";

$str = file_get_contents($wmsGetCapabilites);
$xml = simplexml_load_string( $str );


$returnArray = array();

foreach($xml->Capability->Layer->Layer as $child) {
   foreach($child->Layer as $innerChild) {
		array_push($returnArray, 
			array(
				'Name' => (string)$innerChild->Name,
				'Title' => (string)$innerChild->Title,
				'Abstract' => (string)$innerChild->Abstract
			)
		);
   }
}

echo json_encode($returnArray);
