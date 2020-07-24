<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
        
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4"><i class="fas fa-book"></i>Carnet d'adresse</h1>
            <p><i class="far fa-plus-square"id="bouton_plus"></i><i class="fas fa-trash-alt"id="bouton_trash"></i></p>

            <!--afficher si contient quelquechose -->
                <!--si contient, affiche details + bouton editer-->

            <div id="list_noms">
                
                <!--lire les données et afficher-->
            </div>

            <!--endif-->

            <hr class="my-4">

            
            <!--Panneau create si '+' panneau edition prérempli si 'edition'-->
            <div id="formulaire" class="hidden">
                <form method="post" action="index.php" >
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="civilite">Civilité</label>
                        </div>
                        <select name="civilite" class="custom-select" id="civilite" >
                            <option value="Madame" selected>Madame</option><!-- selected -->
                            <option value="Monsieur">Monsieur</option>
                        </select>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Nom</span>
                        </div>
                        <input id="nom" name="nom" type="text" placeholder="Nom" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Prénom</span>
                        </div>
                        <input id="prenom" name="prenom" type="text" placeholder="Prénom" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required>
                    </div>
                    <div class="input-group input-group-sm mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-sm">Téléphone</span>
                        </div>
                        <input id="tel" name="tel" type="tel" min="10" pattern="[0-9]{10}" maxlength="14" placeholder="02" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" required>
                    </div>
                    <div id="bouton_submit" type="submit" class="btn btn-primary btn-lg">Enregistrer</div>
                    <div id="bouton_annuler" class="btn btn-secondary btn-lg">Annuler</div>
                </form>
            </div>    
        </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="main.js"></script>
</body>
</html>