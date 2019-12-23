<?php 
	if(isset($_POST['submit']))
	{
		if ($_POST['name']==''||$_POST['email']==''||$_POST['objet']=='')
		{
			echo "Veuillez remplir tous les champs";
		}
		else
		{	
			$name = $_POST['name'];
			$name =filter_var($name, FILTER_SANITIZE_STRING);
			$objet = $_POST['objet'];
			$objet =filter_var($objet, FILTER_SANITIZE_STRING);
			$email = $_POST['email'];
			$email =filter_var($email, FILTER_SANITIZE_EMAIL);
			$email= filter_var($email, FILTER_VALIDATE_EMAIL);
				if (!$email) 
				{
					echo "Veuillez saisir une adresse e-mail valide ";
				}
				else
				{
					$header ='From'.$email ."rn";
					$message = $_POST['message'];
					$message = wordwrap($message, 70);
					
					mail("galba.rp@gmail.com", $objet, $message, $header) or die("Error!");
					echo "Thank You!";
				}
		}
	}				
?>