default:
	deploy

install:
	@echo "Installing dependecies..."
	@cp .env.template .env
	@npm install

deploy:
	@echo "Deploying Serverless aplication..."
	@npm run sls:deploy

dev:
	@echo "Initializing in dev mode..."
	@npm run sls:dev