	    <?php include("header.php"); ?>

<main class="main-contact">
    
    <section class="section-contact">
        <h2>Réserver votre place pour le prochain cours de Yoga du rire !</h2>
        <table>
            <thead>
        		<tr>
        			<th colspan="3">Yoga du rire avec Jacqueline (Paris)</th>
        		</tr>
        	</thead>  
            <tbody>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
        			
		        </tr>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
            </tbody>
        <table>
            
        <table>
            <thead>
        		<tr>
        			<th colspan="3">Yoga du rire avec Roger (Marseille)</th>
        		</tr>
        	</thead>  
            <tbody>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
		        <tr>
        			<td>05 Janvier 2016</td>
        			<td>15h30</td>
        			<td><a href="">Réserver ce créneau</a></td>
		        </tr>
            </tbody>
        <table>
    </section>
    <section class="section-contact">
        <h3>Pour valider votre réservation, compléter ce formulaire :</h3>
        <form methode="post" action="">
            <fieldset>
                    <legend>Vos coordonnées</legend>
                    <label for="coords">Votre prénom : </label>
                    <input type="text" name="coordonnees" id="coords"/> 
                    <label for="nom">Votre nom : </label>
                    <input type="text" name="coordonnees" id="nom" /> 
                    <label for="mail">Votre mail : </label>
                    <input type="email" name="coordonnees" id="mail"  /> 
            </fieldset>
            <fieldset>
                    <legend>Quelles sont les raisons de votre venue ?</legend>
                    <label for="detendre">Besoin de me détendre</label>
                    <input type="checkbox" name="raisons" id="detendre" value="detendre"/> 
                    <label for="medecin">Mon médecin m'a conseillé de venir</label>
                    <input type="checkbox" name="raisons" id="medecin" value="medecin"/> 
                    <label for="amis">Je veux tester avec des amis</label>
                    <input type="checkbox" name="raisons" id="amis" value="amis"/> 
            </fieldset>
            <fieldset>
                    <legend>Voulez-vous souscrire à notre programme de fidélité ?</legend>
                    <label for="oui">oui</label>
                    <input type="radio" name="programme" id="oui" value="oui"/> 
                    <label for="non">non</label>
                    <input type="radio" name="programme" id="non" value="non"/> 
            </fieldset>                
            <fieldset>
                    <legend>Comment avez-vous connus Ila Yoga ?</legend> 
                    <select name="comment" id="pays">
                        <option value="internet">Par internet</option>
                        <option value="amis">Par des amis</option>
                        <option value="web">En cherchant sur le web</option>
                    </select>
            </fieldset>
            <input type="submit" value="Envoyer"/>
        </form>
    </section>
</main>
	    <?php include("footer.php"); ?>
