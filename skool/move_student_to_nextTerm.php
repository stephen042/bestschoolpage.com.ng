<?php include('../config.php');
include('inc.session-create.php');
$PageTitle = "Transfer Student To Next Terms";
$FileName = 'move_student_to_nextTerm.php';

$validate = new Validation();

if ($_SESSION['success'] != "") {
    $stat['success'] = $_SESSION['success'];
    unset($_SESSION['success']);
}


if (isset($_POST['transfer']))
{   
	$validate->addRule($_POST['school_session'],'','Session',true);
	$validate->addRule($_POST['school_term'],'','Term',true);
	$validate->addRule($_POST['school_class'],'','Class',true);

	if($validate->validate() && count($stat)==0)
	{
    if($_POST['student_id'] != "")
    {
        foreach ($_POST['student_id'] as $key => $val)
        {
            $iRecord1 = $db->getRow("select * from  manage_student where student_id = '" .$val. "' and session = '" .$_POST['school_session'] . "' and term_id = '" .$_POST['school_term'] . "' and class = '" .$_POST['school_class'] . "' and create_by_userid= '".$create_by_userid."'");

            if ($iRecord1['id'] == '')
            {
				$iLastId=$db->getVal("select id from manage_student order by id desc")+1;		
				$randomId=randomFix(15).'-'.$iLastId;
				
				$alredyStudent = $db->getRow("select * from  manage_student where student_id = '" .$val . "' and create_by_userid= '".$create_by_userid."'");
				
                $aryData1 = array(

					        'userid'							=>	$_SESSION['userid'],
							'usertype'							=>	$_SESSION['usertype'],
							'student_id'                        =>	$val,
							'session'                   		=>	$_POST['school_session'],
							'term_id'                   		=>	$_POST['school_term'],
							'class'                             =>	$_POST['school_class'],
							'last_name'                         =>	$alredyStudent['last_name'],
							'first_name'                        =>	$alredyStudent['first_name'],
							'date_of_admission'                 =>	$alredyStudent['date_of_admission'],
							'state_of_origin'                   =>	$alredyStudent['state_of_origin'],
							'other_name'                        =>	$alredyStudent['other_name'],
							'lga_of_origin'                     =>	$alredyStudent['lga_of_origin'],
							'gender'                            =>	$alredyStudent['gender'],
							'date_of_birth'                     =>	$alredyStudent['date_of_birth'],
							'religion'                          =>	$alredyStudent['religion'],
							'nationality'                       =>	$alredyStudent['nationality'],
							'number_of_sibling'                 =>	$alredyStudent['number_of_sibling'],
							'percentage'                        =>	$alredyStudent['percentage'],
							'order_of_birth'                    =>	$alredyStudent['order_of_birth'],
							'boarding'                          =>	$alredyStudent['boarding'],
							'address_1'                         =>	$alredyStudent['address_1'],
							'address_2'                        	=>	$alredyStudent['address_2'],
							'state'                             =>	$alredyStudent['state'],
							'city'                              =>	$alredyStudent['city'],
							'p_o_box'							=>	$alredyStudent['p_o_box'],
							'email'								=>	$alredyStudent['email'],
							'phone'								=>	$alredyStudent['phone'],
							'mobile'							=>	$alredyStudent['mobile'],
							'picture'							=>	$alredyStudent['picture'],
							'create_by_userid'					=>	$create_by_userid,
							'create_by_usertype'				=>	$create_by_usertype,
							'randomid'							=>	$randomId,
					
                );
                $flgIn2 = $db->insertAry("manage_student", $aryData1);
				
                
            }
             
        }
		
		
		$_SESSION['success'] = "Student Transfered Successfully";
	    redirect($FileName);
		
		
    }
    else 
	{
		$stat['error'] = " Please select Students  ";
	}
	}
	else 
	{
		$stat['error'] = $validate->errors();
	}
}


if ($_GET['action'] == 'sessiondelete') {
    $flgIn1 = $db->delete("school_session", "where id='" . $_GET['id'] . "' ");
    $_SESSION['success'] = 'Deleted Successfully';
    redirect($FileName);
}
if ($_GET['action'] == 'classdelete') {
    $flgIn1 = $db->delete("class_teacher", "where id='" . $_GET['id'] . "' ");
    $_SESSION['success'] = 'Deleted Successfully';
    redirect($FileName);
}
?>
<!DOCTYPE html>
<html>
<head>
<?php include('inc.meta.php'); ?>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Droid+Serif" />
<style>



body, label, span, a, .gwt-Button {

font-family: 'Droid Serif' !important; 
}

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
width: 50%;
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
.abhi .nav-tabs > li > a > span {
display: none;
}

.abhi .nav-tabs > li > a {
padding: 5px 5px;
}
}

.ass .col-md-12 select {

margin-bottom: 15px;

}

.abhi button {
margin-bottom: 15px;
}
.selecall {
	position: relative;
    top: -7px;
    font-size: 20px;
}
</style>
<script language="JavaScript">
	function selectAll(source) {
		checkboxes = document.getElementsByName('student_id[]');
		for(var i in checkboxes)
			checkboxes[i].checked = source.checked;
	}
</script>
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
            <h4 class="page-title licat">Transfer Student To Next Term </h4>
            <ol class="breadcrumb">
                  <li class="dippi"><a href="<?php echo $iClassName; ?>">Search And Transfer Student To Next Term </a> </li>
                  <?php echo msg($stat); ?>
                </ol>
          </div>
            </div>
        <div class="abhi">
              <div class="container">
            <div class="row">
                  <div class="col-md-12"> 
                <div class="card">
                      <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"> <a href="#settings" aria-controls="settingss" role="tab"  data-toggle="tab"> <i class="fa fa-users" aria-hidden="true"></i>  <span>Select Students</span> </a> </li>
                    <li role="presentation"> <a href="#removeclass_teacher" aria-controls="removeclass_teacher" role="tab" data-toggle="tab"> <i class="fa fa-user" aria-hidden="true"></i> <span>Remove Student</span> </a> </li>
                  </ul>
                      <?php $iupdatedetails = $db->getRow("select * from school_register where  create_by_userid='".$create_by_userid."' order by id desc");  ?>
                      <div class="tab-content">
                    <div role="tabpanel" class="tab-pane active" id="settings">
                        <div class="ass" style=" background:#fff; min-height:180px;">
                       
                       <?php if($_GET['action']!='searchstudent') { ?>     
                          <form action="<?php echo $FileName; ?>?action=searchstudent" method="post">    
                            <div class="col-md-12">
                            	<h4>Search Student</h4>
                                  <div class="row">
                                <div class="col-md-4">
                                <select name="current_school_session" class="form-control" required>
                                    <option value="">Select session</option>
                                    <?php 
							$aryList = $db->getRows("select * from school_session where create_by_userid='".$create_by_userid."' ");
							foreach ($aryList as $iList) {
                                                                    ?>
                                    <option value="<?php echo $iList['id']; ?>" <?php if ($_POST['school_session'] == $iList['id']) { echo "selected";  } ?>> <?php echo $iList['session']; ?> </option>
                                    <?php } ?>
                                  </select>
                                    </div>
                                <div class="col-md-4">
                                      <select name="current_school_term" class="form-control" required>
                                    <option value="">Select Term</option>
                                    <?php $aryDetail=$db->getRows("select * from  school_term where create_by_userid='".$create_by_userid."'");
																foreach($aryDetail as $iList)
																{	$i=$i+1;?>
                                    <option value="<?php echo $iList['id']; ?>" <?php  if($_GET['term_id']==$iList['id']) { echo "selected"; }  ?>><?php echo $iList['term']; ?></option>
                                    <?php }?>
                                  </select>
                                    </div>
                                <div class="col-md-4">
                                      <select name="current_school_class" class="form-control" required>
                                    <option value="">Select Class</option>
                                    <?php $i = 0;
                                                                $aryList = $db->getRows("select * from school_class where create_by_userid='".$create_by_userid."' ");
                                                                foreach ($aryList as $iList) {
                                                                    $i = $i + 1;

                                                                    ?>
                                    <option value="<?php echo $iList['id']; ?>" <?php if ($_POST['school_class'] == $iList['id']) {
                                                                        echo "selected";
                                                                    } ?>> <?php echo $iList['name']; ?></option>
                                    <?php } ?>
                                  </select>
                                </div>
                                
                                <div class="col-md-12">
                                     <input type="submit" name="searchstudent" class="btn btn-primary" style="color:#fff"  value="Search Student">
                                </div>
                                
                              </div>
                                </div>
                          </form>  
                          <?php } else { ?>
                          
                          <form action="" method="post">     
                            <div class="col-md-12">
                            <br> 
                            <h4>Transfer Student To </h4>
                             <div class="row">
                                <div class="col-md-4">
                                      <select name="school_session" class="form-control" required>
                                    <option value="">Select session</option>
                                    <?php 
							$aryList = $db->getRows("select * from school_session where create_by_userid='".$create_by_userid."' ");
							foreach ($aryList as $iList) {
                                                                    ?>
                                    <option value="<?php echo $iList['id']; ?>" <?php if ($_POST['school_session'] == $iList['id']) { echo "selected";  } ?>> <?php echo $iList['session']; ?> </option>
                                    <?php } ?>
                                  </select>
                                    </div>
                                <div class="col-md-4">
                                      <select name="school_term" class="form-control" required>
                                    <option value="">Select Term</option>
                                    <?php $aryDetail=$db->getRows("select * from  school_term where create_by_userid='".$create_by_userid."'");
																foreach($aryDetail as $iList)
																{	$i=$i+1;?>
                                    <option value="<?php echo $iList['id']; ?>" <?php  if($_GET['term_id']==$iList['id']) { echo "selected"; }  ?>><?php echo $iList['term']; ?></option>
                                    <?php }?>
                                  </select>
                                    </div>
                                <div class="col-md-4">
                                      <select name="school_class" class="form-control" required>
                                    <option value="">Select Class</option>
                                    <?php $i = 0;
                                                                $aryList = $db->getRows("select * from school_class where create_by_userid='".$create_by_userid."' ");
                                                                foreach ($aryList as $iList) {
                                                                    $i = $i + 1;

                                                                    ?>
                                    <option value="<?php echo $iList['id']; ?>" <?php if ($_POST['school_class'] == $iList['id']) {
                                                                        echo "selected";
                                                                    } ?>> <?php echo $iList['name']; ?></option>
                                    <?php } ?>
                                  </select>
                                    </div>
                             
                             
                         
                          <div class="col-md-12"> <button type="submit" name="transfer" class="btn btn-primary pull-left"><span>Transfer Selected Student</span> </button>
                          <a href="<?php echo $FileName; ?>"  class="btn btn-info" style="color:#fff; margin-left:20px;" >BACK</a>
                          </div>
                           </div>
                           </div>
                         
                        <div class="ade">
                              <div class="row">
                            <div class="card-box">
                           <B class="selecall">Select All</B> <input style="width: 25px;height: 25px;" type="checkbox" id="selectall" onClick="selectAll(this)" />
                           <table class="table table-striped table-bordered">
                                <thead>
                                      <tr>
                                    <th>Student ID</th>
                                    <th>Select Student</th>
                                    <th>Session</th>
                                    <th>Term</th>
                                    <th>Class</th>
                                  </tr>
                                    </thead>
                                <tbody>
       <?php
			$iSearchSt = '';
			if($_POST['current_school_session']!='')
				{
					
					$iSearchSt .=  " and session = ".$_POST['current_school_session'];
				}
			if($_POST['current_school_term']!='')
				{
					
					$iSearchSt .= " and term_id = ".$_POST['current_school_term'];
				}	
			if($_POST['current_school_class']!='')
				{
					
					$iSearchSt .= " and class = ".$_POST['current_school_class'];
				}
		$i = 0;
		$aryList = $db->getRows("select * from manage_student where create_by_userid='".$create_by_userid."' $iSearchSt order by id desc ");
		foreach ($aryList as $iList) {
		$i++;
		$session_details= $db->getRow("select id,session from school_session where id='".$iList['session']."' and create_by_userid='".$create_by_userid."'");
		$term_details= $db->getRow("select id,term from school_term where id='".$iList['term_id']."' and  create_by_userid='".$create_by_userid."'");
		$class_details= $db->getRow("select id,name from school_class where id='".$iList['class']."' and create_by_userid='".$create_by_userid."'");
													?>
                                      <tr>
                                    <td><input type="checkbox" name="student_id[]" value="<?php echo $iList['student_id']; ?>" <?php if ($_POST['student_id'] == $iList['id']) {	echo "checked"; } ?>>
										<?php echo $iList['student_id']; ?></td>
                                    <td><?php echo $iList['first_name'] . ' ' . $iList['last_name']; ?></td>
                                    <td><?php echo $session_details['session']; ?></td>
                                    <td><?php echo $term_details['term']; ?></td>
                                    <td><?php echo $class_details['name']; ?></td>
                                  </tr>
                                      <?php } ?>
                                    </tbody>
                              </table>

                                </div>
                                <div class="col-md-12"> <button type="submit" name="transfer" class="btn btn-primary pull-left"><span>Transfer Selected Student</span> </button>
                                 <a href="<?php echo $FileName; ?>"  class="btn btn-info" style="color:#fff; margin-left:20px;" >BACK</a>
                                </div>
                          </div>
                            </div>
                      	</form>
                       
                       
                       <?php } ?>
                        </div>
                       </div>   
                        
                        
                    <div role="tabpanel" class="tab-pane" id="removeclass_teacher">
                          <div class="ass">
                        <div class="row">
                              <div class="col-md-8"> </div>
                            </div>
                      </div>
                          <div class="asde">
                        <div class="row">
                              <div class="col-md-12"> </div>
                            </div>
                      </div>
                          <div class="ade">
                        <div class="row">
                              <div class="card-box">
                            <table id="example" class="table table-striped table-bordered">
                                  <thead>
                                <tr>
                                      <th>Student ID</th>
                                      <th>Select Student</th>
                                      <th>Session</th>
                                      <th>Term</th>
                                      <th>Class</th>
                                      <th>Action</th>
                                    </tr>
                              </thead>
                                  <tbody>
                                <?php
			$i = 0;
			
			
			$aryList = $db->getRows("select * from manage_student where create_by_userid='".$create_by_userid."'");
		
			foreach ($aryList as $iList) {
			$i++;
			$session_details= $db->getRow("select id,session from school_session where id='".$iList['session']."' and create_by_userid='".$create_by_userid."'");
			$term_details= $db->getRow("select id,term from school_term where id='".$iList['term_id']."' and  create_by_userid='".$create_by_userid."'");
			$class_details= $db->getRow("select id,name from school_class where id='".$iList['class']."' and create_by_userid='".$create_by_userid."'");

													?>
                                <tr>
                                      <td><?php echo $iList['student_id']; ?></td>
                                      <td><?php echo $iList['first_name'] . ' ' . $iList['last_name']; ?></td>
                                      <td><?php echo $session_details['session']; ?></td>
                                      <td><?php echo $term_details['term']; ?></td>
                                      <td><?php echo $class_details['name']; ?></td>
                                      <!-- <td><a href="javascript:del('<?php echo $FileName; ?>?action=delete&randomid=<?php echo $iList['randomid']; ?>')" class="table-action-btn" > <i class="fa fa-times"></i> </a></td> -->
                                      <td><a href="del.php?randomid=<?php echo $iList['randomid']; ?>"><i class="fa fa-times"></i></a></td>
                                    </tr>
                                <?php } ?>
                              </tbody>
                                </table>
                          </div>
                            </div>
                      </div>
                        </div>
                  </div>
                    </div>
              </div>
                </div>
          </div>
            </div>
      </div>
        </div>
    <?php include('inc.footer.php'); ?>
  </div>
      </div>
      <?php include('inc.js.php'); ?>
      <script>
    var x, i, j, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        /*for each element, create a new DIV that will act as the selected item:*/
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        /*for each element, create a new DIV that will contain the option list:*/
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 1; j < selElmnt.length; j++) {
            /*for each option in the original select element,
            create a new DIV that will act as an option item:*/
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function (e) {
                /*when an item is clicked, update the original select box,
                and the selected item:*/
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function (e) {
            /*when the select box is clicked, close any other select boxes,
            and open/close the current select box:*/
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }

    function closeAllSelect(elmnt) {
        /*a function that will close all select boxes in the document,
        except the current select box:*/
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }

    /*if the user clicks anywhere outside the select box,
    then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
</script> 
      <script>

    function staffselection(getstaffid) {
        alert("hgsdsh");


        document.getElementById("hiddenstaff").value = getstaffid;

    }
</script> 
      <script>
$(document).ready(function () {
$('#example').DataTable();
});
</script>
    </body>
</html>
