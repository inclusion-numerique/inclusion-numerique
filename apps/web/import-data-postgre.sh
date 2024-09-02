if [ ! $1 ]; then
  echo "❌ Il manque le chemin du dump en premier paramètre."
  exit 1
fi

docker cp $1 inclusion_numerique_pg:/home/dump.custom

docker exec inclusion_numerique_pg pg_restore --verbose --clean --no-acl --no-owner -U inclusion-numerique -h localhost -d inclusion-numerique /home/dump.custom
