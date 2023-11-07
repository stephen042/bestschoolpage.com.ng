<?php include('../config.php');
include('inc.session-create.php');

$PageTitle = "CONFIGURATION";
$FileName = 'configuration.php';
$validate = new Validation();

if($_SESSION['success']!="")
{
	$stat['success'] = $_SESSION['success'];
	unset($_SESSION['success']);
}
else{
   // $stat['success'] = '';
}
if(isset($_POST['configuration']))
{
    $validate->addRule($_POST['name'],'','Name',true);
	$validate->addRule($_POST['about'],'','school Address',true);
	$validate->addRule($_POST['school_type'],'','school Address',true);
	
	$validate->addRule($_POST['state'],'','school Address',true);

    if($validate->validate() && count($stat) == 0)
    {
        if(isset($_FILES["logo"]["name"]) && !empty($_FILES["logo"]["name"]))
        {
            $filename = basename($_FILES['logo']['name']);
            $ext1 = strtolower(substr($filename, strrpos($filename, '.') + 1));
            if (in_array($ext1, array('jpg', 'png', 'gif', 'jpeg')))
            {
                $newfile = md5(time())."_".$filename;
                move_uploaded_file($_FILES['logo']['tmp_name'], "../uploads/" . $newfile);
            }
        }
        else { $newfile = $_POST['logo_old']; }

        $aryData = array(
						'logo' 					=>	$newfile,	
						'name' 					=>	$_POST['name'],
						'about' 				=>	$_POST['about'],
						'school_type' 			=>	$_POST['school_type'],
						'location' 				=>	$_POST['location'],
						'state' 				=>	$_POST['state'],
						'website' 				=>	$_POST['website'],
						'moto' 				=>	$_POST['moto'],
						);
				$flgIn = $db->updateAry("school_register", $aryData, "where id='".$_SESSION['userid']."'");
				$_SESSION['success']="Updated successfully.";
				redirect($FileName.'?action=configuration');
    }
    else
	{
		$stat['error'] = $validate->errors();
	}
}
elseif(isset($_POST['savesession']))
{
    $validate->addRule($_POST['session'],'','Session',true);

    if($validate->validate() && count($stat) == 0)
    {
        $iAlreadySession=$db->getVal("select id from school_session where create_by_usertype='".$create_by_usertype."' and create_by_userid='".$create_by_userid."' and session='".$_POST['session']."'");
		
        if($iAlreadySession!='')
        {
			$stat['error']= "This session is already exist.";
		}
		else
		{
			$iLastId=$db->getVal("select id from school_session order by id desc")+1;
			$iRandomId=randomFix(15).'-'.$iLastId;
			
            $aryData = array(
							'usertype' 				=>	$_SESSION['usertype'],
							'userid' 				=>	$_SESSION['userid'],
							'session' 				=>	$_POST['session'],
							'create_by_usertype' 	=>	$create_by_usertype,
							'create_by_userid' 		=>	$create_by_userid,
							'randomid' 				=>	$iRandomId,
							);
					$flgIn2 = $db->insertAry("school_session", $aryData);
					$_SESSION['success']="Session saved successfully.";
					redirect($FileName.'?action=session');
        }
	}
    else
	{
		$stat['error'] = $validate->errors();
	}
}
elseif(isset($_POST['editsession'])) 
{
    $validate->addRule($_POST['session'],'','session',true);

    if($validate->validate() && count($stat) == 0)
    {
		$aryData = array(
						'session' 		=>	$_POST['session'],
						);
			$flgIn2 = $db->updateAry("school_session", $aryData, "where randomid='".$_GET['randomid']."'");
			$_SESSION['success']="Session saved successfully.";
			redirect($FileName.'?action=session');
    }
}
elseif($_GET['action']=='deletesession') 
{
	$flgIn1 = $db->delete("school_session", "where randomid='".$_GET['randomid']."'");
	$_SESSION['success'] = 'Deleted Successfully';
    redirect($FileName.'?action=session');
    
}
//------------------------------

elseif(isset($_POST['saveterm']))
{
    $validate->addRule($_POST['term'],'','Term',true);

    if($validate->validate() && count($stat) == 0)
    {
        $iAlreadySession=$db->getVal("select id from school_term where create_by_usertype='".$create_by_usertype."' and create_by_userid='".$create_by_userid."' and term='".$_POST['term']."'");
		
        if($iAlreadySession!='')
        {
			$stat['error']= "This term is already exist.";
		}
		else
		{
			$iLastId=$db->getVal("select id from school_term order by id desc")+1;
			$iRandomId=randomFix(15).'-'.$iLastId;
			
            $aryData = array(
							'usertype' 				=>	$_SESSION['usertype'],
							'userid' 				=>	$_SESSION['userid'],
							'term' 			     	=>	$_POST['term'],
							'create_by_usertype' 	=>	$create_by_usertype,
							'create_by_userid' 		=>	$create_by_userid,
							'randomid' 				=>	$iRandomId,
							);
					$flgIn2 = $db->insertAry("school_term", $aryData);
					$_SESSION['success']="Term saved successfully.";
					redirect($FileName.'?action=term');
        }
	}
    else
	{
		$stat['error'] = $validate->errors();
	}
}
elseif(isset($_POST['editterm'])) 
{
    $validate->addRule($_POST['term'],'','Term',true);

    if($validate->validate() && count($stat) == 0)
    {
		$aryData = array(
						'term' 		=>	$_POST['term'],
						);
			$flgIn2 = $db->updateAry("school_term", $aryData, "where randomid='".$_GET['randomid']."'");
			$_SESSION['success']="Term saved successfully.";
			redirect($FileName.'?action=term');
    }
}
elseif($_GET['action']=='deleteterm') 
{
	$flgIn1 = $db->delete("school_term", "where randomid='".$_GET['randomid']."'");
	$_SESSION['success'] = 'Deleted Successfully';
    redirect($FileName.'?action=term');
    
}
//------------------------------
elseif(isset($_POST['savesection']))
{
	if($_POST['section']=='0')
	{
		$validate->addRule($_POST['short_name'],'','Section',true);
	}
	 
	if($validate->validate() && count($stat) == 0)
    {
        $iAlreadySection=$db->getVal("select id from school_section where create_by_usertype='".$create_by_usertype."' and create_by_userid='".$create_by_userid."' and section='".$_POST['section']."'");
		
        if($iAlreadySection!='')
        {
			$stat['error']= "This section is already exist.";
		}
		else
		{
			$iLastId=$db->getVal("select id from school_section order by id desc")+1;
			$iRandomId=randomFix(15).'-'.$iLastId;
			
			if($_POST['short_name']=='')
			{
				$iSection=$_POST['section'];
				$iShortName=$_POST['section'];
			}
			else
			{
				$iSection=$_POST['short_name'];
				$iShortName=$_POST['short_name'];
			}
			
            $aryData = array(
							'usertype' 				=>	$_SESSION['usertype'],
							'userid' 				=>	$_SESSION['userid'],
							'section' 				=>	$iSection,
							'short_name' 			=>	$iShortName,
							'create_by_usertype' 	=>	$create_by_usertype,
							'create_by_userid' 		=>	$create_by_userid,
							'randomid' 				=>	$iRandomId,
							);
					$flgIn2 = $db->insertAry("school_section", $aryData);
					$_SESSION['success']="Section saved successfully.";
					redirect($FileName.'?action=section');
        }
	}
    else
	{
		$stat['error'] = $validate->errors();
	}
}
elseif(isset($_POST['editsection']))
{
    $validate->addRule($_POST['short_name'],'','session',true);

    if($validate->validate() && count($stat) == 0)
    {
		$aryData = array(
						'short_name' 		=>	$_POST['short_name'],
						);
			$flgIn2 = $db->updateAry("school_section", $aryData, "where randomid='".$_GET['randomid']."'");
			$_SESSION['success']="Section saved successfully.";
			redirect($FileName.'?action=section');
    }
}
elseif($_GET['action']=='delete_section') 
{
    $flgIn1 = $db->delete("school_section", "where randomid='".$_GET['randomid']."'");
	$_SESSION['success'] = 'Section deleted successfully';
    redirect($FileName.'?action=section');
}
elseif(isset($_POST['saveclass']))
{    


    //$validate->addRule($_POST['session_id'],'','Session',true);
    $validate->addRule($_POST['section_id'],'','Section',true);
    $validate->addRule($_POST['name'],'','Name',true);
    $validate->addRule($_POST['short_name'],'','Short Name',true);

    if($validate->validate() && count($stat) == 0)
    {    
        $postclass=trim(preg_replace('/\s+/','', $_POST['name']));
        $iAlreadyClass=$db->getRow("select * from school_class where create_by_usertype='".$create_by_usertype."' and create_by_userid='".$create_by_userid."' and name='".$postclass."' and session_id='".$_POST['session_id']."' and section_id='".$_POST['section_id']."'");

		$tableClass=trim(preg_replace('/\s+/','', $iAlreadyClass['name']));
		

     if(strtolower($tableClass) == strtolower($postclass))
		{
             $stat['error']= "This class is already exist.";
        }
		

		else
		{
			$iLastId=$db->getVal("select id from school_class order by id desc")+1;
			$iRandomId=randomFix(15).'-'.$iLastId;
			
            $aryData = array(
							'usertype' 				=>	$_SESSION['usertype'],
							'userid' 				=>	$_SESSION['userid'],
							//'session_id' 			=>	$_POST['session_id'],
							'section_id' 			=>	$_POST['section_id'],
							'name' 					=>	trim(preg_replace('/\s+/','', $_POST['name'])),
							'short_name' 			=>	$_POST['short_name'],
							'create_by_usertype' 	=>	$create_by_usertype,
							'create_by_userid' 		=>	$create_by_userid,
							'randomid' 				=>	$iRandomId,
							);
					$flgIn2 = $db->insertAry("school_class", $aryData);
					$_SESSION['success']="Class saved successfully.";
					redirect($FileName.'?action=class');
        }
	}
    else
	{
		$stat['error'] = $validate->errors();
	}
}

elseif(isset($_POST['editclass'])) 
{
    $validate->addRule($_POST['name'],'','Name',true);
    $validate->addRule($_POST['short_name'],'','Short Name',true);

    if($validate->validate() && count($stat) == 0)
    {
		$aryData = array(
						'name' 					=>	$_POST['name'],
						'short_name' 			=>	$_POST['short_name'],
						);
			$flgIn2 = $db->updateAry("school_class", $aryData, "where randomid='".$_GET['randomid']."'");
			$_SESSION['success']="Class saved successfully.";
			redirect($FileName.'?action=class');
    }
}

elseif(($_GET['action']=='delete_class')) 
{
    $flgIn1 = $db->delete("school_class", "where randomid='".$_GET['randomid']."'");
	$_SESSION['success'] = 'Deleted Successfully';
    redirect($Filename.'?action=class');
}
elseif (isset($_POST['savesubject']))
{
	
	//$validate->addRule($_POST['session_id'],'','Session',true);
	//$validate->addRule($_POST['term_id'],'','Term',true);
    $validate->addRule($_POST['section_id'],'','Section',true);
    $validate->addRule($_POST['class_id'],'','Class',true);
    $validate->addRule($_POST['subject'],'','Subject',true);

    if($validate->validate() && count($stat) == 0)
    {
        $iAlreadySubject=$db->getVal("select id from school_subject where create_by_usertype='".$create_by_usertype."' and create_by_userid='".$create_by_userid."' and subject='".$_POST['subject']."' and session_id='".$_POST['session_id']."' and section_id='".$_POST['section_id']."' and class_id='".$_POST['class_id']."'");
		
        if($iAlreadySubject!='')
        {
			$stat['error']= "This subject is already exist.";
		}
		else
		{
			$iLastId=$db->getVal("select id from school_subject order by id desc")+1;
			$iRandomId=randomFix(15).'-'.$iLastId;
			
            $aryData = array(
							'usertype' 				=>	$_SESSION['usertype'],
							'userid' 				=>	$_SESSION['userid'],
							//'session_id' 			=>	$_POST['session_id'],
							//'term_id' 		    =>	$_POST['term_id'],
							'section_id' 			=>	$_POST['section_id'],
							'class_id' 				=>	$_POST['class_id'],
							'subject' 				=>	$_POST['subject'],
							'create_by_usertype' 	=>	$create_by_usertype,
							'create_by_userid' 		=>	$create_by_userid,
							'randomid' 				=>	$iRandomId,
							);
					$flgIn2 = $db->insertAry("school_subject", $aryData);
					$_SESSION['success']="Subject saved successfully.";
					redirect($FileName.'?action=subject');
        }
	}
    else
	{
		$stat['error'] = $validate->errors();
	}
}
elseif(isset($_POST['editsubject'])) 
{
	$validate->addRule($_POST['subject'],'','Subject',true);

    if($validate->validate() && count($stat) == 0)
    {
		$aryData = array(
						'subject' 					=>	$_POST['subject'],
						);
			$flgIn2 = $db->updateAry("school_subject", $aryData, "where randomid='".$_GET['randomid']."'");
			$_SESSION['success']="Subject saved successfully.";
			redirect($FileName.'?action=subject');
    }
}

elseif(($_GET['action']=='delete_subject')) 
{
    $flgIn1 = $db->delete("school_subject", "where randomid='".$_GET['randomid']."'");
	$_SESSION['success'] = 'Subject deleted successfully';
    redirect($Filename.'?action=subject');
}

elseif(isset($_POST['pdfsetting']))
{
	 
$iSchoolPDFsetting=$db->getVal("select id from school_pdfsetting where create_by_usertype='".$create_by_usertype."'  and section_id	= '".$_GET['randomid']."' and create_by_userid='".$create_by_userid."' ");
	
	
	if($_POST['is_grade']=='')			{ $is_grade 		= '0'; 		} 		else { 	$is_grade 			= '1'; } 
	if($_POST['is_class']=='')			{ $is_class 		= '0'; 		} 		else { 	$is_class 			= '1'; } 
	if($_POST['is_position']=='')		{ $is_position 			= '0'; 		} 		else { 	$is_position 				= '1'; }
	if($_POST['is_totalstudent']=='')	{ $is_totalstudent 		= '0'; 		} 		else { 	$is_totalstudent 			= '1'; } 
	if($_POST['is_addmission']=='')		{ $is_addmission 		= '0'; 		} 		else { 	$is_addmission 			= '1'; } 
	if($_POST['is_totalscore']=='')		{ $is_totalscore 		= '0'; 		} 		else { 	$is_totalscore 			= '1'; } 
	if($_POST['is_session']=='')		{ $is_session 		= '0'; 		} 		else { 	$is_session 			= '1'; } 
	if($_POST['is_finalaverage']=='')	{ $is_finalaverage 		= '0'; 		} 		else { 	$is_finalaverage 			= '1'; } 
	if($_POST['is_terms']=='')			{ $is_terms 		= '0'; 		} 		else { 	$is_terms 			= '1'; } 
	if($_POST['is_highestaverage']=='')	{ $is_highestaverage 		= '0'; 		} 		else { 	$is_highestaverage 			= '1'; } 
	if($_POST['is_lowestaverage']=='')	{ $is_lowestaverage 		= '0'; 		} 		else { 	$is_lowestaverage 			= '1'; } 
	if($_POST['is_schoolopen']=='')		{ $is_schoolopen 		= '0'; 		} 		else { 	$is_schoolopen 			= '1'; } 
	if($_POST['is_daypresent']=='')		{ $is_daypresent 		= '0'; 		} 		else { 	$is_daypresent 			= '1'; } 
	if($_POST['is_dayabsent']=='')		{ $is_dayabsent 		= '0'; 		} 		else { 	$is_dayabsent 			= '1'; } 
	if($_POST['is_profilepic']=='')		{ $is_profilepic 		= '0'; 		} 		else { 	$is_profilepic 			= '1'; } 
	if($_POST['is_affective']=='')		{ $is_affective 		= '0'; 		} 		else { 	$is_affective 			= '1'; } 
	if($_POST['is_phycomotor']=='')		{ $is_phycomotor 		= '0'; 		} 		else { 	$is_phycomotor 			= '1'; } 
	
	if($_POST['is_out']=='')			{ $is_out 				= '0'; 		} 		else { 	$is_out 				= '1'; } 
	if($_POST['is_highest_avg']=='')	{ $is_highest_avg 		= '0'; 		} 		else { 	$is_highest_avg 		= '1'; } 
	if($_POST['is_lowest_avg']=='')		{ $is_lowest_avg 		= '0'; 		} 		else { 	$is_lowest_avg 			= '1'; } 
	if($_POST['is_class_avg']=='')		{ $is_class_avg 		= '0'; 		} 		else { 	$is_class_avg 			= '1'; } 
	if($_POST['is_grade_details']=='')	{ $is_grade_details 	= '0'; 		} 		else { 	$is_grade_details 		= '1'; } 
	if($_POST['is_no_of_subjects']=='')	{ $is_no_of_subjects 	= '0'; 		} 		else { 	$is_no_of_subjects 		= '1'; } 
	if($_POST['is_pos']=='')			{ $is_pos 				= '0'; 		} 		else { 	$is_pos 				= '1'; } 

	






        if($iSchoolPDFsetting!='')
        {
			$aryData = array(	'is_grade' 					=>	$is_grade,
								 'is_class' 				=>	$is_class,
								 
								'is_position' 				=>	$is_position,
								'is_totalstudent' 			=>	$is_totalstudent,
								
								'is_addmission' 			=>	$is_addmission,
								'is_totalscore' 			=>	$is_totalscore,
								'is_session' 				=>	$is_session,
								'is_finalaverage' 			=>	$is_finalaverage,
								'is_terms' 					=>	$is_terms,
								'is_highestaverage' 		=>	$is_highestaverage,
								'is_lowestaverage' 			=>	$is_lowestaverage,
								'is_schoolopen' 			=>	$is_schoolopen,
								'is_daypresent' 			=>	$is_daypresent,
								'is_dayabsent' 				=>	$is_dayabsent,
								
								
								'is_profilepic' 			=>	$is_profilepic,
								'is_affective' 				=>	$is_affective,
								'is_phycomotor' 			=>	$is_phycomotor,
								
								
								'is_out' 					=>	$is_out,
								'is_highest_avg' 			=>	$is_highest_avg,
								'is_lowest_avg' 			=>	$is_lowest_avg,
								'is_class_avg' 				=>	$is_class_avg,
								'is_grade_details' 			=>	$is_grade_details,
								'is_no_of_subjects' 		=>	$is_no_of_subjects,
								'is_pos' 					=>	$is_pos,
								
								
								'title_1' 					=>	$_POST['title_1'],
								'title_2' 					=>	$_POST['title_2'],
								'title_3' 					=>	$_POST['title_3'],
								
								'title_4' 					=>	$_POST['title_4'],
								'title_5' 					=>	$_POST['title_5'],
								
								
								'create_by_usertype' 		=>	$create_by_usertype,
								'create_by_userid' 			=>	$create_by_userid,
								'section_id'				=>	$_GET['randomid'],
								
							);
				$flgIn2 = $db->updateAry("school_pdfsetting", $aryData , "where section_id='".$_GET['randomid']."'");
		}
		else
		{
			
			
            $aryData = array(
								'is_grade' 					=>	$is_grade,
								 'is_class' 				=>	$is_class,
								 
								'is_position' 				=>	$is_position,
								'is_totalstudent' 			=>	$is_totalstudent,
								
								'is_addmission' 			=>	$is_addmission,
								'is_totalscore' 			=>	$is_totalscore,
								'is_session' 				=>	$is_session,
								'is_finalaverage' 			=>	$is_finalaverage,
								'is_terms' 					=>	$is_terms,
								'is_highestaverage' 		=>	$is_highestaverage,
								'is_lowestaverage' 			=>	$is_lowestaverage,
								'is_schoolopen' 			=>	$is_schoolopen,
								'is_daypresent' 			=>	$is_daypresent,
								'is_dayabsent' 				=>	$is_dayabsent,
								
								'is_out' 					=>	$is_out,
								'is_highest_avg' 			=>	$is_highest_avg,
								'is_lowest_avg' 			=>	$is_lowest_avg,
								'is_class_avg' 				=>	$is_class_avg,
								'is_grade_details' 			=>	$is_grade_details,
								'is_no_of_subjects' 		=>	$is_no_of_subjects,
								'is_pos' 					=>	$is_pos,	
								
								'title_1' 					=>	$_POST['title_1'],
								'title_2' 					=>	$_POST['title_2'],
								'title_3' 					=>	$_POST['title_3'],							
								
								
								'title_4' 					=>	$_POST['title_4'],	
								'title_5' 					=>	$_POST['title_5'],	
								
								
								'create_by_usertype' 		=>	$create_by_usertype,
								'create_by_userid' 			=>	$create_by_userid,
								'section_id'				=>	$_GET['randomid'],
							);
					$flgIn2 = $db->insertAry("school_pdfsetting", $aryData);
				
        }
	// echo $flgIn2 = $db->getLastQuery();
	// exit;
		
	 	$_SESSION['success']="Section saved successfully.";
		redirect($FileName.'?action=pdfsetting&randomid='.$_GET['randomid']);
}
?>
<!DOCTYPE html>
<html>
<head>
<?php include('inc.meta.php'); ?>

<style>

.abhi .nav-tabs {
	border-bottom: 2px solid #DDD;
}

.abhi .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
	border-width: 0;
}

.abhi .nav.nav-tabs > li > a:hover, .nav.tabs-vertical > li > a:hover {
	color: #1B3058 !important;
}

.abhi .nav-tabs > li > a {
	border: none;
	color: #1B3058 !important;
}

.abhi .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover, .tabs-vertical > li.active > a, .tabs-vertical > li.active > a:focus, .tabs-vertical > li.active > a:hover {
	color: #1B3058 !important;
}

.abhi .nav > li > a i {
	font-size: 16px;
	padding-right: 5px;
}

.abhi .nav-tabs > li > a::after {
	content: "";
	background: #1B3058;
	height: 2px;
	position: absolute;
	width: 100%;
	left: 0px;
	bottom: -1px;
	transition: all 250ms ease 0s;
	transform: scale(0);
}

.abhi .nav-tabs > li.active > a::after, .nav-tabs > a::after {
	transform: scale(1);
}

.abhi .tab-nav > li > a::after {
	background: # #5a4080 none repeat scroll 0% 0%;
	color: #fff;
}

.abhi .tab-pane {
	padding: 25px 0;
}

.abhi .tab-content {
	padding: 20px;
}

.abhi .nav-tabs > li {
	    width: 164px;



	text-align: center;
}

.abhi .card {
	background: #FFF none repeat scroll 0% 0%;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
	margin-bottom: 30px;
}

.abhi body {
	background: #EDECEC;
	padding: 50px;
}

.abhi .ass .select-hide {
	display: none;
}

.abhi .ass .custom-select select {
	display: none;
}

.abhi .ass .select-selected {
	border-bottom: 1px solid #9e9e9e;
}

.abhi .ass .ytr {
	margin-top: 22px;
}

.abhi .fdg {
	border-bottom: 1px solid #9e9e9e2b;
}

.abhi .shg p {
	color: #1B3058;
}

.abhi .ass .bgb i {
	color: #1B3058;
	font-size: 19px;
}

.abhi .ass .col-md-4 i {
	background: #F44336;
	padding: 8px;
	border-radius: 50%;
	color: #fff;
	font-size: 14px;
}

.abhi .ass .shg {
	padding-top: 29px;
}

.abhi .ass .select-items {
	border: 1px solid #ddd;
	padding: 9px;
	position: relative;
	bottom: 20px;
	background: #fff;
}

.abhi .ass .select-items div {
	padding-bottom: 7px;
}

.abhi .ab-1 {
	text-align: center;
}

.abhi .icon i {
	color: #0b4587;
	background: #fff;
	font-size: 32px;
	border-radius: 50%;
	position: absolute;
	bottom: -25px;
	left: 0;
	right: 0;
	width: 100%;
	margin: 0 auto;
	padding: 15px 10px 15px 10px;
}

.abhi .icon input {
	position: absolute;
	left: 0;
	opacity: 0;
	width: 100%;
	right: 0;
	top: -18px;
}

.abhi .abhish .input-field {
	padding-bottom: 0;
}

.abhi .abh {
	margin-top: 35px;
}

.abhi .input-field input {
	background-color: transparent;
	border: none;
	border-bottom: 1px solid #9e9e9e;
	border-radius: 0;
	outline: none;
	width: 100%;
	margin: 0 0 15px 0;
	padding: 0;
	box-shadow: none;
	box-sizing: content-box;
	transition: all .3s;
}

.abhi .input-field label {
	color: #9e9e9e;
}

.abhi .icon {
	position: relative;
	left: 0;
	bottom: 0;
	width: 7%;
	margin: 0 auto;
	right: 0;
	height: 0;
	top: 0;
}

.abhi .ab-2 {
	background: #0b4587;
	color: #fff;
	width: 23%;
	padding: 28px;
	margin: 0 auto;
}

.abhi .imgage {
	padding-bottom: 13px;
}

.abhi .abb {
	text-align: center;
}

.abhi .ab-3 {
	margin-top: 30px;
}

.abhi .plp {
	margin-bottom: 80px;
}

.abhi .ab-3 .col-md-1 i {
	font-size: 17px;
	color: #000000d6;
}

.abhi .ab-3 .col-md-4 i {
	background: #F44336;
	padding: 8px;
	border-radius: 50%;
	color: #fff;
	font-size: 14px;
}

.abhi .ab-3 input {
	color: rgba(0, 0, 0, 0.26);
	border-bottom: 1px dotted rgba(0, 0, 0, 0.26);
}

.abhi button {
	cursor: pointer;
	float: right;
	background: #1B3058;
	color: #fff;
}

.abhi button:hover {

	background: #1B3058;
	color: #fff;
}

.abhi button i {
	padding-right: 45px;
	font-size: 13px;
}

.abhi .input-field {
	padding-bottom: 20px;
}

.abhi .assde {
	margin-top: 50px;
}

.abhi .ade {
	margin-top: 40px;
}

.abhi .bgb {
	text-align: center;
	padding-top: 3px;
}

.abhi .bgb i {
	color: #1B3058;
	font-size: 19px;
}

@media all and (max-width: 724px) {
	

	.abhi .nav-tabs > li > a {
		padding: 5px 5px;
	}
}

.pdfconfiguration {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pdfconfiguration input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
      border: #00000040 1px solid;
}
.pdfconfiguration:hover input ~ .checkmark {
  background-color: #ccc;
}
.pdfconfiguration input:checked ~ .checkmark {
  background-color: #2196F3;
}
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}
.pdfconfiguration input:checked ~ .checkmark:after {
  display: block;
}
.pdfconfiguration .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
</head>
<body class="fixed-left">
<div id="wrapper">
  <?php include('inc.header.php'); ?>
  <?php include('inc.sideleft.php'); ?>
  <div class="content-page">
    <div class="content">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h4 class="page-title licat"><?php echo $PageTitle ?></h4>
			<ol class="breadcrumb">
				<li class="dippi">
					<a href="#">Create session, term, sections, classes and subjects</a>
				</li>
			</ol>
			<?php if(isset($stat)) echo msg($stat); ?>
          </div>
        </div>
        
	<!-- Basic Form Wizard -->
	<div class="abhi">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!-- Nav tabs -->
					<div class="card">
						<ul class="nav nav-tabs" role="tablist">
							<li role="presentation" class="<?php if($_GET['action']=='' || $_GET['action']=='configuration') { echo "active"; } ?>">
								<a href="?action=configuration">
									<i class="fa fa-exclamation-circle" aria-hidden="true"></i> <span>SCHOOL INFO</span>
								</a>
                            </li>
							<li role="presentation" class="<?php if($_GET['action']=='session') { echo "active"; } ?>">
								<a href="?action=session">
									<i class="fa fa-line-chart" aria-hidden="true"></i><span>SESSION</span>
								</a>
							
							</li>
							
							<li role="presentation" class="<?php if($_GET['action']=='term') { echo "active"; } ?>">
								<a href="?action=term">
									<i class="fa fa-th-list" aria-hidden="true"></i><span>TERM</span>
								</a>
							
							</li>
							
							<li role="presentation" class="<?php if($_GET['action']=='section') { echo "active"; } ?>">
								<a href="?action=section">
									<i class="fa fa-users" aria-hidden="true"></i>
                                    <span>SECTIONS</span>
								</a>
							</li>
							<li role="presentation" class="<?php if($_GET['action']=='class') { echo "active"; } ?>">
								<a href="?action=class">
									<i class="fa fa-th-list"></i> <span>CLASS</span>
								</a>
							</li>
							<li role="presentation" class="<?php if($_GET['action']=='subject') { echo "active"; } ?>">
								<a href="?action=subject">
									<i class="fa fa-book" aria-hidden="true"></i> 
									<span>SUBJECT</span>
								</a>
							</li>
                            
                             
						</ul>
						<div class="tab-content">
						<?php if($_GET['action']=='' || $_GET['action']=='configuration') {
						$iupdatedetails = $db->getRow("select * from  school_register where id='".$_SESSION['userid']."'"); 
						?>
							<!-- Tab panes -->
							<div role="tabpanel" class="tab-pane active" id="home">
                            <form action="" method="post" enctype="multipart/form-data">
                            <div class="ab-1">
								<div class="imgage">
									<?php if($iupdatedetails['logo']!="") { ?>
									<img src="../uploads/<?php echo $iupdatedetails['logo']; ?>" style="width: 200px; height: 200px;">
									<?php } else { ?>
									<img src="assets/image/download.png" style="width: 200px; height: 200px;">
									<?php } ?>
								</div>
								<div class="icon">
									<i class="fa fa-cloud-upload" aria-hidden="true"></i>
									<input type="file" name="logo" value="<?php echo $iupdatedetails['logo']; ?>">
									<input type="hidden" class="form-control required" name="logo_old" value="<?php echo $iupdatedetails['logo']; ?>">
								</div>
								<div class="ab-2">
									<span class="title">Drag image to upload</span><br>
									<span class="title">School Logo</span>
								</div>
							</div>
							<div class="abh">
								<div class="input-field">
									<label>School Name</label></br>
									<input type="text" name="name" value="<?php echo $iupdatedetails['name']; ?>">
								</div>
								<div class="input-field">
									<label>About the School</label></br>
									<input type="text" name="about" value="<?php echo $iupdatedetails['about']; ?>">
								</div>
								<div class="input-field">
									<label>School Type</label></br>
									<select class="required form-control" name="school_type">
										<option value="">Select School Type</option>
										<?php $i = 0;
										$aryList = $db->getRows("select * from school_type ");
										foreach($aryList as $iList) 
										{ $i=$i+1;
										?>
										<option value="<?php echo $iList['id']; ?>" <?php if($iupdatedetails['school_type']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['school_type']; ?></option>
										<?php } ?>
									</select>
								</div>
								<div class="input-field">
                                    <label>Location</label></br>
                                    <input type="text" name="location" value="<?php echo $iupdatedetails['location']; ?>">
								</div>
								<div class="input-field">
									<label>State</label></br>
									<select class="required form-control" name="state">
										<option value="">Select State</option>
										<?php $i=0;
                                        $aryList = $db->getRows("select * from state where status='1'");
										foreach($aryList as $iList)
										{ $i=$i+1;
										?>
										<option value="<?php echo $iList['id']; ?>" <?php if ($iupdatedetails['state'] == $iList['id']) { echo "selected"; } ?>><?php echo $iList['title']; ?></option>
										<?php } ?>
									</select>
								</div>
								<div class="input-field">
									<label>MOTO</label></br>
									<input type="text" name="moto" value="<?php echo $iupdatedetails['moto']; ?>">
								</div>
                                
                                <div class="input-field">
									<label>Website</label></br>
									<input type="text" name="website" value="<?php echo $iupdatedetails['website']; ?>">
								</div>
								<button type="submit" name="configuration" class="btn"><span>Save</span></button>
							</div>
							</form>
							</div>
							<?php }
							
							 elseif($_GET['action']=='session') { ?>
							<div role="tabpanel" class="tab-pane active" id="profilxe">
							<div class="abhish">
								<form action="" method="POST">
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-10">
										<div class="input-field">
											<input type="text" name="session" placeholder="Session e.g 2019-2020" class="form-control" value="<?php echo $_POST['session']; ?>">
											<button type="submit" name="savesession" class="btn">
												<i class="fa fa-plus" aria-hidden="true"></i><span>Save Session</span>
											</button>
										</div>
									</div>
									<div class="col-md-1"></div>
								</div>
								</form>
								<div class="card-box">
								<form action="" method="POST">
									<table class="table table-striped table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>SESSION</th>
											<th>Edit</th>
											<th>Remove</th>
										</tr>
									</thead>
                                    <tbody>
                                    <?php $i=0;
									$aryList = $db->getRows("select * from school_session where create_by_userid='".$create_by_userid."' order by id desc");
									foreach($aryList as $iList) 
									{ $i=$i+1;
									?>
                                        <tr>
											<td><?php echo $i ?></td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="text" name="session" value="<?php echo $iList['session']; ?>" class="form-control">
												<?php } else { echo $iList['session']; } ?>
											</td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="submit" name="editsession" value="SAVE" class="btn btn-primary" style="color:white;"> 
												<?php } else { ?>
												<a href="?action=session&randomid=<?php echo $iList['randomid']; ?>" class="table-action-btn">
                                                    <i class="fa fa-pencil"></i> 
												</a>
												<?php } ?>
											</td>
											<td>
												<a href="javascript:del('?action=deletesession&randomid=<?php echo $iList['randomid']; ?>')" class="table-action-btn"> 
													<i class="fa fa-times"></i> 
												</a>
											</td>
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                    </table>
								</form>	
								</div>
							</div>
							</div>
							
							<?php } elseif($_GET['action']=='term') { ?>
							<div role="tabpanel" class="tab-pane active" id="profilxe">
							<div class="abhish">
								<form action="" method="POST">
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-10">
										<div class="input-field">
											<input type="text" name="term" placeholder="Term e.g First Term" class="form-control" value="<?php echo $_POST['term']; ?>">
											<button type="submit" name="saveterm" class="btn">
												<i class="fa fa-plus" aria-hidden="true"></i><span>Save Term</span>
											</button>
										</div>
									</div>
									<div class="col-md-1"></div>
								</div>
								</form>
								<div class="card-box">
								<form action="" method="POST">
									<table class="table table-striped table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>TERM</th>
											<th>Edit</th>
											<th>Remove</th>
										</tr>
									</thead>
                                    <tbody>
                                    <?php $i=0;
									$aryList = $db->getRows("select * from school_term where create_by_userid='".$create_by_userid."' order by id desc");
									foreach($aryList as $iList) 
									{ $i=$i+1;
									?>
                                        <tr>
											<td><?php echo $i ?></td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="text" name="term" value="<?php echo $iList['term']; ?>" class="form-control">
												<?php } else { echo $iList['term']; } ?>
											</td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="submit" name="editterm" value="SAVE" class="btn btn-primary" style="color:white;"> 
												<?php } else { ?>
												<a href="?action=term&randomid=<?php echo $iList['randomid']; ?>" class="table-action-btn">
                                                    <i class="fa fa-pencil"></i> 
												</a>
												<?php } ?>
											</td>
											<td>
												<a href="javascript:del('?action=deleteterm&randomid=<?php echo $iList['randomid']; ?>')" class="table-action-btn"> 
													<i class="fa fa-times"></i> 
												</a>
											</td>
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                    </table>
								</form>	
								</div>
							</div>
							</div>
							<?php } elseif ($_GET['action']=='section') { ?>
							<div role="tabpanel" class="tab-pane active" id="profilxe">
							<div class="abhish">
								<form action="" method="POST">
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-10">
										<div class="input-field">
											<select name="section" id="section" class="form-control" onChange="showothers();">
												<option value="CRECHE" <?php if($_POST['section']=='CRECHE') { echo "selected"; } ?>>CRECHE</option>
												<option value="NURSERY" <?php if($_POST['section']=='NURSERY') { echo "selected"; } ?>>NURSERY</option>
												<option value="PRIMARY" <?php if($_POST['section']=='PRIMARY') { echo "selected"; } ?>>PRIMARY</option>
												<option value="SECONDARY" <?php if($_POST['section']=='SECONDARY') { echo "selected"; } ?>>SECONDARY</option>
												<option value="0" <?php if($_POST['section']=='0') { echo "selected"; } ?>>OTHERS</option>
											</select>
											<span id="showother" style="display:<?php if($_POST['section']=='0') { echo "block"; } else { echo "none"; } ?>">
												<input type="text" name="short_name" value="<?php echo $_POST['short_name']; ?>" class="form-control" placeholder="Other, please type Section Name">
											</span>
											<br>
											<button type="submit" name="savesection" class="btn">
												<i class="fa fa-plus" aria-hidden="true"></i><span>Save Section</span>
											</button>
										</div>
									</div>
									<div class="col-md-1"></div>
								</div>
								</form>
								<script>
								function showothers()
								{
									var section = document.getElementById("section").value;
									
									if(section==0)
									{
										document.getElementById("showother").style.display='block';
									}
									else
									{
										document.getElementById("showother").style.display='none';
									}
								}
								</script>
								<div class="card-box">
								<form action="" method="POST">
									<table class="table table-striped table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>SECTION</th>
											<th>Short Name</th>
											<th>Edit</th>
											<th>Remove</th>
                                            
										</tr>
									</thead>
                                    <tbody>
                                    <?php $i=0;
                                    $aryList = $db->getRows("select * from school_section where create_by_userid='".$create_by_userid."' order by id desc");
									foreach($aryList as $iList) 
									{ $i=$i+1;
									?>
                                        <tr>
											<td><?php echo $i ?></td>
											<td><?php echo $iList['short_name']; ?></td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="text" name="short_name" value="<?php echo $iList['short_name']; ?>" class="form-control">
												<?php } else { echo $iList['short_name']; } ?>
											</td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="submit" name="editsection" value="SAVE" class="btn btn-primary" style="color:white;"> 
												<?php } else { ?>
												<a href="?action=section&randomid=<?php echo $iList['randomid']; ?>" class="table-action-btn">
                                                    <i class="fa fa-pencil"></i> 
												</a>
												<?php } ?>
											</td>
											<td>
												<a href="javascript:del('?action=delete_section&randomid=<?php echo $iList['randomid']; ?>')" class="table-action-btn"> 
													<i class="fa fa-times"></i> 
												</a>
											</td>
                                           
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                    </table>
								</form>	
								</div>
							</div>
							</div>
							<?php } elseif($_GET['action']=='class') { ?>
                            <div role="tabpanel" class="tab-pane active" id="settings">
							<div class="abhish">
								<form action="" method="POST">
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-10">
										<div class="row">
											<!--<div class="col-md-6">
											<div class="input-field">
												<select name="session_id" id="session_id" class="form-control">
												<?php
												$iSessionList = $db->getRows("select * from school_session where create_by_userid='".$create_by_userid."'");
												foreach($iSessionList as $iList) 
												{ $i=$i+1;
												?>
													<option value="<?php echo $iList['id']; ?>" <?php if($_POST['session_id']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['session']; ?></option>
												<?php } ?>	
												</select>
											</div>
											</div>-->
											<div class="col-md-6">
											<div class="input-field">
												<select name="section_id" id="section_id" class="form-control">
												<?php $i=0;
												$iSectionList = $db->getRows("select * from school_section where create_by_userid='".$create_by_userid."'");
												foreach($iSectionList as $iList) 
												{ $i=$i+1;
												?>
													<option value="<?php echo $iList['id']; ?>" <?php if($_POST['section_id']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['section']; ?></option>
												<?php } ?>
												</select>
											</div>
											</div>
										</div>	
										<br>
										<div class="row">
											<div class="col-md-7">
											<div class="input-field">
												<input type="text" name="name" value="<?php echo $_POST['name']; ?>" class="form-control" placeholder="Name">
											</div>
											</div>
											<div class="col-md-5">
											<div class="input-field">
												<input type="text" name="short_name" value="<?php echo $_POST['short_name']; ?>" class="form-control" placeholder="Short Name">
											</div>
											</div>
										</div>
										<br>
										<button type="submit" name="saveclass" class="btn">
											<i class="fa fa-plus" aria-hidden="true"></i><span>Save Class</span>
										</button>
									</div>
									<div class="col-md-1"></div>
								</div>
								</form>
								<div class="card-box">
								<form action="" method="POST">
									<table class="table table-striped table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<th>Name</th>
											<th>Short Name</th>
											<th>Section</th>
											<th>Edit</th>
											<th>Remove</th>
                                            <th>PDF Setting</th>
										</tr>
                                        
									</thead>
                                    <tbody>
                                    <?php $i=0;
                                    $aryList = $db->getRows("select * from school_class where create_by_userid='".$create_by_userid."' order by id desc");
									foreach($aryList as $iList) 
									{ $i=$i+1;
									?>
                                        <tr>
											<td><?php echo $i ?></td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="text" name="name" value="<?php echo $iList['name']; ?>" class="form-control">
												<?php } else { echo $iList['name']; } ?>
											</td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="text" name="short_name" value="<?php echo $iList['short_name']; ?>" class="form-control">
												<?php } else { echo $iList['short_name']; } ?>
											</td>
										
                                        <td>
												<?php echo $db->getVal("select section from school_section where id='".$iList['section_id']."' and create_by_userid='".$create_by_userid."'"); ?>
										</td> 
										<!--<td>
												<?php echo $db->getVal("select session from school_session where id='".$iList['session_id']."' and create_by_userid='".$create_by_userid."'"); ?>
										</td>--->
										<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="submit" name="editclass" value="SAVE" class="btn btn-primary" style="color:white;"> 
												<?php } else { ?>
												<a href="?action=class&randomid=<?php echo $iList['randomid']; ?>" class="table-action-btn">
                                                    <i class="fa fa-pencil"></i> 
												</a>
												<?php } ?>
										</td>
											
											<td>
												<a href="javascript:del('?action=delete_class&randomid=<?php echo $iList['randomid']; ?>')" class="table-action-btn"> 
													<i class="fa fa-times"></i> 
												</a>
											</td>
                                             <td><a href="?action=pdfsetting&randomid=<?php echo $iList['section_id']; ?>" class="table-action-btn">
                                                    <i class="fa fa-file-pdf-o" aria-hidden="true"></i>

												</a></td>
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                    </table>
								</form>	
								</div>
							</div>
                            </div>
							<?php } elseif($_GET['action']=='subject') { ?>
							<div role="tabpanel" class="tab-pane active" id="subjects">
                            <div class="abhish">
								<form action="" method="POST">
								<div class="row">
									<div class="col-md-1"></div>
									<div class="col-md-10">
										<div class="row">
											<!--<div class="col-md-4">
											<div class="input-field">
												<select name="session_id" id="session_id" class="form-control">
												<?php
												$iSessionList = $db->getRows("select * from school_session where create_by_userid='".$create_by_userid."'");
												foreach($iSessionList as $iList) 
												{ $i=$i+1;
												?>
													<option value="<?php echo $iList['id']; ?>" <?php if($_POST['session_id']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['session']; ?></option>
												<?php } ?>	
												</select>
											</div>
											</div>-->
											<!--<div class="col-md-4">
											<div class="input-field">
												<select name="term_id" id="term_id" class="form-control">
												<?php
												$iSessionList = $db->getRows("select * from school_term where create_by_userid='".$create_by_userid."'");
												foreach($iSessionList as $iList) 
												{ $i=$i+1;
												?>
													<option value="<?php echo $iList['id']; ?>" <?php if($_POST['term_id']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['term']; ?></option>
												<?php } ?>	
												</select>
											</div>
											</div>-->
											<div class="col-md-6">
											<div class="input-field">
												<select name="section_id" id="section_id" class="form-control" onChange="getClass()">
												<option value="">Select Section</option>
												<?php $i=0;
												$iSectionList = $db->getRows("select * from school_section where create_by_userid='".$create_by_userid."'");
												foreach($iSectionList as $iList) 
												{ $i=$i+1;
												?>
													<option value="<?php echo $iList['id']; ?>" <?php if($_POST['section_id']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['section']; ?></option>
												<?php } ?>
												</select>
											</div>
											</div>
										</div>	
										<br>
										<div class="row">
											<div class="col-md-6">
											<div class="input-field">
											<span id="showclass">
												<select name="class_id" id="class_id" class="form-control">
												<option value="">Select Class</option>
												<?php $i=0;
												$iSectionList = $db->getRows("select * from school_class where create_by_userid='".$create_by_userid."' and section_id='".$_POST['section_id']."'");
												foreach($iSectionList as $iList) 
												{ $i=$i+1;
												?>
													<option value="<?php echo $iList['id']; ?>" <?php if($_POST['section_id']==$iList['id']) { echo "selected"; } ?>><?php echo $iList['name']; ?></option>
												<?php } ?>
												</select>
											</span>	
											</div>
											</div>
											<div class="col-md-6">
											<div class="input-field">
												<input type="text" name="subject" value="<?php echo $_POST['subject']; ?>" class="form-control" placeholder="Subject Name">
											</div>
											</div>
										</div>
										<br>
										<button type="submit" name="savesubject" class="btn">
											<i class="fa fa-plus" aria-hidden="true"></i><span>Save Class</span>
										</button>
									</div>
									<div class="col-md-1"></div>
								</div>
								</form>
								<div class="card-box">
								<form action="" method="POST">
									<table class="table table-striped table-bordered">
									<thead>
										<tr>
											<th>#</th>
											<!--<th>Session</th>
											<th>Term</th>-->
											<th>Section</th>
											<th>Class</th>
											<th>Subject</th>
											<th>Edit</th>
											<th>Remove</th>
										</tr>
									</thead>
                                    <tbody>
                                    <?php $i=0;
                                    $aryList = $db->getRows("select * from school_subject where create_by_userid='".$create_by_userid."' order by id desc");
									foreach($aryList as $iList) 
									{ $i=$i+1;
									?>
                                        <tr>
											<td><?php echo $i ?></td>
											<!--<td><?php echo $db->getVal("select session from school_session where id='".$iList['session_id']."'"); ?></td>
											<td><?php echo $db->getVal("select term from school_term where id='".$iList['term_id']."'"); ?></td>-->
											<td><?php echo $db->getVal("select section from school_section where id='".$iList['section_id']."'"); ?></td>
											<td><?php echo $db->getVal("select name from school_class where id='".$iList['class_id']."'"); ?></td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="text" name="subject" value="<?php echo $iList['subject']; ?>" class="form-control">
												<?php } else { echo $iList['subject']; } ?>
											</td>
											<td>
												<?php if($_GET['randomid']==$iList['randomid']) { ?>
												<input type="submit" name="editsubject" value="SAVE" class="btn btn-primary" style="color:white;"> 
												<?php } else { ?>
												<a href="?action=subject&randomid=<?php echo $iList['randomid']; ?>" class="table-action-btn">
                                                    <i class="fa fa-pencil"></i> 
												</a>
												<?php } ?>
											</td>
											<td>
												<a href="javascript:del('?action=delete_subject&randomid=<?php echo $iList['randomid']; ?>')" class="table-action-btn"> 
													<i class="fa fa-times"></i> 
												</a>
											</td>
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                    </table>
								</form>	
								</div>
							</div>                                
							</div>
							<?php } elseif( $_GET['action']=='pdfsetting') {
					
$iSchoolPDFsetting=$db->getRow("select * from school_pdfsetting where create_by_usertype='".$create_by_usertype."' and create_by_userid='".$create_by_userid."' and section_id='".$_GET['randomid']."'");

						?>
							<!-- Tab panes -->
							<div role="tabpanel" class="tab-pane active" id="home">
                            <form action="" method="post" enctype="multipart/form-data">
							<div class="">
								
                                
                                
                                
                                
                                
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show POS
                                    <input type="checkbox" name="is_pos" value="1" <?php if($iSchoolPDFsetting['is_pos']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Out of
                                    <input type="checkbox" name="is_out" value="1" <?php if($iSchoolPDFsetting['is_out']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Highest Average
                                    <input type="checkbox" name="is_highest_avg" value="1" <?php if($iSchoolPDFsetting['is_highest_avg']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Lowest Average

                                    <input type="checkbox" name="is_lowest_avg" value="1" <?php if($iSchoolPDFsetting['is_lowest_avg']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Class Average
                                    <input type="checkbox" name="is_class_avg" value="1" <?php if($iSchoolPDFsetting['is_class_avg']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show GRADE	DETAILS
                                    <input type="checkbox" name="is_grade_details" value="1" <?php if($iSchoolPDFsetting['is_grade_details']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show No of Subjects
                                    <input type="checkbox" name="is_no_of_subjects" value="1" <?php if($iSchoolPDFsetting['is_no_of_subjects']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Final Grade
                                    <input type="checkbox" name="is_grade" value="1" <?php if($iSchoolPDFsetting['is_grade']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Class
                                    <input type="checkbox" name="is_class" value="1" <?php if($iSchoolPDFsetting['is_class']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                
                                
                                
                                
                                
                                
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Final Position
                                    <input type="checkbox" name="is_position" value="1" <?php if($iSchoolPDFsetting['is_position']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                <div class="input-field">
                                    <label class="pdfconfiguration">Show Total Student
                                    <input type="checkbox" name="is_totalstudent" value="1" <?php if($iSchoolPDFsetting['is_totalstudent']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                
                                
                                
                                
                                
                           <div class="input-field">
                                    <label class="pdfconfiguration">Show Admission No	
                                    <input type="checkbox" name="is_addmission" value="1" <?php if($iSchoolPDFsetting['is_addmission']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show Total Score
                                    <input type="checkbox" name="is_totalscore" value="1" <?php if($iSchoolPDFsetting['is_totalscore']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show Session
                                    <input type="checkbox" name="is_session" value="1" <?php if($iSchoolPDFsetting['is_session']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show Final Average
                                    <input type="checkbox" name="is_finalaverage" value="1" <?php if($iSchoolPDFsetting['is_finalaverage']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                      
                                
                                
                                
                                
                                
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show   Term
                                    <input type="checkbox" name="is_terms" value="1" <?php if($iSchoolPDFsetting['is_terms']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show   Highest Avg. in Class
                                    <input type="checkbox" name="is_highestaverage" value="1" <?php if($iSchoolPDFsetting['is_highestaverage']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show   Lowest Avg. in Class
                                    <input type="checkbox" name="is_lowestaverage" value="1" <?php if($iSchoolPDFsetting['is_lowestaverage']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show   Days School Open
                                    <input type="checkbox" name="is_schoolopen" value="1" <?php if($iSchoolPDFsetting['is_schoolopen']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show   Day(s) Present
                                    <input type="checkbox" name="is_daypresent" value="1" <?php if($iSchoolPDFsetting['is_daypresent']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show   Day(s) Absent
                                    <input type="checkbox" name="is_dayabsent" value="1" <?php if($iSchoolPDFsetting['is_dayabsent']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                 
                               
                                 <div class="input-field">
                                    <label class="pdfconfiguration">Show  Profile Picture
                                    <input type="checkbox" name="is_profilepic" value="1" <?php if($iSchoolPDFsetting['is_profilepic']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                                  <div class="input-field">
                                    <label class="pdfconfiguration">Show AFFECTIVE TRAITS
                                    <input type="checkbox" name="is_affective" value="1" <?php if($iSchoolPDFsetting['is_affective']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div>
                                
                               <div class="input-field">
                                    <label class="pdfconfiguration">Show PSYCHOMOTOR
                                    <input type="checkbox" name="is_phycomotor" value="1" <?php if($iSchoolPDFsetting['is_phycomotor']=='1') { echo 'checked'; } ?>>
                                    <span class="checkmark"></span>
                                    </label>
								</div> 
                                
                                
                                
                                
<div class="input-field">
<label class="pdfconfiguration">Title 1:</label>
<input type="text" name="title_1" value="<?php if($iSchoolPDFsetting['title_1']=='') { echo 'Class Teacher'; } else { echo $iSchoolPDFsetting['title_1']; } ?>">


</div> 
<div class="input-field">
<label class="pdfconfiguration">Title 2:</label>
<input type="text" name="title_2" value="<?php if($iSchoolPDFsetting['title_2']=='') { echo "Class Teacher's Remarks"; } else { echo $iSchoolPDFsetting['title_2']; } ?>">

</div> 
<div class="input-field">
<label class="pdfconfiguration">Title 3:</label>
<input type="text" name="title_3" value="<?php if($iSchoolPDFsetting['title_3']=='') { echo "Principal's Remarks"; }  else { echo $iSchoolPDFsetting['title_3']; } ?>">
</div> 
                                
                                
 <div class="input-field">
<label class="pdfconfiguration">Title 4:</label>
<input type="text" name="title_4" value="<?php if($iSchoolPDFsetting['title_4']=='') { echo "AFFECTIVE TRAITS"; }  else { echo $iSchoolPDFsetting['title_4']; } ?>">
</div> 



<div class="input-field">
<label class="pdfconfiguration">Title 5:</label>
<input type="text" name="title_5" value="<?php if($iSchoolPDFsetting['title_5']=='') { echo "PSYCHOMOTOR"; }  else { echo $iSchoolPDFsetting['title_5']; } ?>">
</div>                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                
								<button type="submit" name="pdfsetting" class="btn"><span>Save</span></button>
							</div>
							</form>
							</div>
							<?php }	?>
                            
                            
                           
                        </div>
                    </div>
                </div>
			</div>
		</div>
   </div>
    <script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<script>
function getClass()
{
	
	var section_id = document.getElementById("section_id").value;

	$.post("ajax.php",  
			{	
				"action"	     	:	"Action_getClass",
				section_id	     	:	section_id,
			},
		function(data){
			
			$("#showclass").html(data);
					
				
			});
}
</script> 
      </div>
    </div>
    <?php include('inc.footer.php'); ?>
  </div>
</div>
<?php include('inc.js.php'); ?>
</body>
</html>