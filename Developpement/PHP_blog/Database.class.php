<?php


class Database
{
	private $pdo;
	//private $dsn	 	= 'mysql:host=localhost;dbname=gaming-site;charset=utf8';
	//private $password 	= '';
	//private $user	 	= 'root';
	private $dsn	 	= 'mysql:host=vincentcipqzsxo0.mysql.db;dbname=vincentcipqzsxo0;charset=utf8';
	private $password 	= 'cqs9mV5u5qdx';
	private $user	 	= 'vincentcipqzsxo0';

	public function __construct()
	{
		$this->pdo = new PDO
		(
			$this->dsn,$this->user,$this->password,
			[
				PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION	
			]
		);

		$this->pdo->exec('SET NAMES UTF8');
	}

	/**
	 * CUD - Create Update Delete (prepare)
	 * @param $sql Requête sql sous forme de string
	 * @param $values Tableau de paramètres pour alimenter le requête
	 */
	public function executeSql($sql, array $values = array())
	{
		$query = $this->pdo->prepare($sql);

		$query->execute($values);

		return $this->pdo->lastInsertId();
	}
	
	/**
	 * R - Read Uniquement (fetchAll)
	 * @param $sql Requête SELECT sql sous forme de string
	 * @param $values Tableau de paramètres pour alimenter le requête
	 */
    public function query($sql, array $criteria = array())
    {
        $query = $this->pdo->prepare($sql);

        $query->execute($criteria);

        return $query->fetchAll(PDO::FETCH_ASSOC);
    }

	/**
	 * R - Read Uniquement (fetch)
	 * @param $sql Requête SELECT sql sous forme de string
	 * @param $values Tableau de paramètres pour alimenter le requête
	 */
    public function queryOne($sql, array $criteria = array())
    {
        $query = $this->pdo->prepare($sql);

        $query->execute($criteria);

        return $query->fetch(PDO::FETCH_ASSOC);
    }
}