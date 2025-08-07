PROJECT_NAME = portifolio
CONTAINER_NAME = $(shell docker compose ps -q app)

.PHONY: up down logs restart

## Sobe o container em modo detach
up:
	docker compose up -d

## Para os containers
stop:
	docker compose down

## Mostra os logs do container app
logs:
	docker logs -f $(CONTAINER_NAME)

## Reinicia
restart: down up logs
