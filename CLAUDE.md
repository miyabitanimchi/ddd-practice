# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Architecture Overview

This is a Domain-Driven Design (DDD) practice project implementing a book ordering system using TypeScript. The codebase follows DDD patterns with a clean separation of domain concepts.

### Domain Structure

The domain layer is organized under `src/domain/` with the following components:

- **Aggregates** (`aggregates/`): Order aggregate root containing order business logic and order lines
- **Entities** (`entities/`): Book and Stock entities representing core business objects
- **Value Objects** (`value-objects/`): ISBN and Money immutable value objects with validation
- **Events** (`events/`): Domain events like OrderPlaced following the DomainEvent interface
- **Repositories** (`repositories/`): Repository interfaces defining data access contracts
- **Services** (`services/`): Domain services (currently empty)

### Key Domain Concepts

- **Order Aggregate**: Manages order lifecycle from PENDING to CONFIRMED status, calculates totals, and emits domain events
- **Money Value Object**: Handles monetary calculations with currency validation, stored as cents internally
- **ISBN Value Object**: Validates ISBN-10 and ISBN-13 formats using regex pattern
- **Event Sourcing Pattern**: Order aggregate uses event collection with pullEvents() method

### Code Patterns

- Value objects use private constructors with static factory methods for validation
- Domain events implement a common DomainEvent interface with type and timestamp
- Aggregates follow the pattern of collecting domain events and providing pullEvents() method
- Repository pattern uses interfaces for dependency inversion

## Known Issues

The Money class has syntax errors in method declarations:
- `publictoNumber()` should be `public toNumber()`
- `publiccode()` should be `public code()`

The Stock class has a similar syntax error:
- `publicgetQuantity()` should be `public getQuantity()`

## Development Notes

This appears to be a TypeScript project without build configuration files. When working with this codebase, you may need to add appropriate TypeScript configuration and build tooling.