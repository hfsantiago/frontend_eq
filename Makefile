env: ## Start required containers: postgres and ruby
	@docker compose -f docker-compose.yml up -d

up: env ## alias for env

start: env
	docker compose -f docker-compose.yml exec -it app-eq npm start

shell:
	docker compose -f docker-compose.yml exec -it app-eq bash

down: ## Shut down containers
	@docker compose -f docker-compose.yml down