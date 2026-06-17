---
title: "Maturity taxonomy outline"
summary: "Generated outline of OpenClaw maturity scorecard surfaces, categories, and feature coverage IDs."
---

# Maturity taxonomy outline

> This file is generated from `taxonomy.yaml` and `docs/maturity-scores.yaml`. Run `pnpm maturity:render` after editing scorecard sources.
> Committed docs intentionally exclude the old maintainer inventory tree; per-run QA evidence stays in GitHub Actions artifacts.

## Core

### Gateway runtime

- Surface id: `gateway-runtime`

#### Approvals and Remote Execution

- Category id: `gateway-runtime.approvals-and-remote-execution`
- Exec approvals: `exec-approvals`
- Plugin approvals: `plugin-approvals`
- Node exec approvals: `node-exec-approvals`
- Approved node execution: `approved-node-execution`
- Approval mutation safety: `approval-mutation-safety`
- Delivery fallback behavior: `delivery-fallback-behavior`

#### HTTP APIs

- Category id: `gateway-runtime.http-apis`
- OpenAI-compatible APIs: `openai-compatible-apis`
- Tool invocation API: `tool-invocation-api`
- Admin API access: `admin-api-access`
- Hook ingress: `hook-ingress`

#### Hosted Web Surface

- Category id: `gateway-runtime.hosted-web-surface`
- Control UI: `control-ui`
- WebChat hosting: `webchat-hosting`
- Plugin web routes: `plugin-web-routes`
- Canvas and A2UI routes: `canvas-and-a2ui-routes`

#### Gateway RPC APIs and Events

- Category id: `gateway-runtime.gateway-rpc-apis-and-events`
- Health APIs: `health-apis`
- Identity and presence APIs: `identity-and-presence-apis`
- Model APIs: `model-apis`
- Usage and memory APIs: `usage-and-memory-apis`
- Session APIs: `agents.subagents`, `gateway.sessions-list`, `tools.session-status`
- Chat APIs: `chat-apis`
- Channel APIs: `channel-apis`
- Web login and wake APIs: `web-login-and-wake-apis`
- Config and secrets APIs: `config-and-secrets-apis`
- Update and setup APIs: `update-and-setup-apis`
- Agent and artifact APIs: `agent-and-artifact-apis`
- Task and automation APIs: `task-and-automation-apis`
- Tool and skill APIs: `tool-and-skill-apis`
- Request and event envelopes: `request-and-event-envelopes`
- Idempotent side effects: `idempotent-side-effects`
- Method discovery: `method-discovery`
- Event discovery: `event-discovery`
- Accepted-then-final results: `accepted-then-final-results`
- Event ordering: `event-ordering`
- State refresh after gaps: `state-refresh-after-gaps`

#### Device Auth and Pairing

- Category id: `gateway-runtime.device-auth-and-pairing`
- Shared-secret login: `shared-secret-login`
- Trusted proxy auth: `trusted-proxy-auth`
- Private ingress mode: `private-ingress-mode`
- Device challenge signing: `device-challenge-signing`
- Device tokens: `device-tokens`
- Setup-code bootstrap: `setup-code-bootstrap`
- Auth mismatch recovery: `auth-mismatch-recovery`
- Device auth migration: `device-auth-migration`
- Client pairing: `client-pairing`
- Node pairing: `node-pairing`

#### Network Access and Discovery

- Category id: `gateway-runtime.network-access-and-discovery`
- Loopback and LAN access: `loopback-and-lan-access`
- Tailnet access: `tailnet-access`
- SSH tunnels: `ssh-tunnels`
- Endpoint discovery: `endpoint-discovery`
- Saved endpoints: `saved-endpoints`
- TLS pinning: `tls-pinning`

#### Nodes and Remote Capabilities

- Category id: `gateway-runtime.nodes-and-remote-capabilities`
- Node presence: `node-presence`
- Node capabilities: `node-capabilities`
- Node inventory: `node-inventory`
- Node actions: `node-actions`
- Node events: `node-events`
- Pending work delivery: `pending-work-delivery`
- Remote device capabilities: `remote-device-capabilities`
- Remote host commands: `remote-host-commands`

#### Health, Diagnostics, and Repair

- Category id: `gateway-runtime.health-diagnostics-and-repair`
- Health snapshots: `health-snapshots`
- Channel readiness: `channel-readiness`
- Stability diagnostics: `stability-diagnostics`
- Payload diagnostics: `payload-diagnostics`
- Diagnostics exports: `diagnostics-exports`
- Doctor checks: `doctor-checks`
- Log tailing: `log-tailing`

#### Protocol Compatibility

- Category id: `gateway-runtime.protocol-compatibility`
- Published protocol schema: `published-protocol-schema`
- Runtime request validation: `runtime-request-validation`
- JSON Schema export: `json-schema-export`
- Swift client models: `swift-client-models`
- Version negotiation: `version-negotiation`
- Client transport defaults: `client-transport-defaults`
- Backward-compatible evolution: `backward-compatible-evolution`

#### Roles and Permissions

- Category id: `gateway-runtime.roles-and-permissions`
- Role negotiation: `role-negotiation`
- Operator permissions: `operator-permissions`
- Approval-gated actions: `approval-gated-actions`
- Untrusted node declarations: `untrusted-node-declarations`
- Event scoping: `event-scoping`

#### Gateway Lifecycle

- Category id: `gateway-runtime.gateway-lifecycle`
- Foreground startup: `foreground-startup`
- Service installation: `service-installation`
- Restart and stop: `config.restart-apply`, `plugins.capabilities`, `runtime.gateway-restart`
- Service status: `service-status`
- Bind and port settings: `bind-and-port-settings`
- Config reload: `config.hot-apply`, `plugins.hot-reload`, `plugins.lifecycle`, `plugins.skills`
- Multi-gateway isolation: `multi-gateway-isolation`

#### Security Controls

- Category id: `gateway-runtime.security-controls`
- Non-loopback auth: `non-loopback-auth`
- Trusted proxy exceptions: `trusted-proxy-exceptions`
- Gateway and node trust boundaries: `gateway-and-node-trust-boundaries`
- Trusted CIDR auto-approval: `trusted-cidr-auto-approval`
- Fail-closed protocol handling: `fail-closed-protocol-handling`
- Remote execution safeguards: `remote-execution-safeguards`

#### WebSocket Connection

- Category id: `gateway-runtime.websocket-connection`
- WebSocket transport: `websocket-transport`
- Connect challenge: `connect-challenge`
- Connect request: `connect-request`
- Protocol version negotiation: `protocol-version-negotiation`
- hello-ok snapshot: `hello-ok-snapshot`
- Startup retry: `startup-retry`
- Session limits: `session-limits`
- Plugin surface URLs: `plugin-surface-urls`

### CLI

- Surface id: `cli-install-update-onboard-doctor`

#### CLI Setup

- Category id: `cli-install-update-onboard-doctor.cli-setup`
- Installer scripts: `installer-scripts`
- Local prefix install: `local-prefix-install`
- Package-manager installs: `package-manager-installs`
- Supported Node runtime: `supported-node-runtime`
- Source checkout install: `source-checkout-install`
- CLI entrypoint: `cli-entrypoint`

#### Onboarding and Auth Setup

- Category id: `cli-install-update-onboard-doctor.onboarding-and-auth-setup`
- Guided onboarding: `guided-onboarding`
- Targeted reconfiguration: `targeted-reconfiguration`
- Auth choices: `auth-choices`
- Gateway auth storage: `gateway-auth-storage`
- Remote onboarding: `remote-onboarding`

#### Plugin and Channel Setup

- Category id: `cli-install-update-onboard-doctor.plugin-and-channel-setup`
- Channel picker: `channel-picker`
- Plugin install sources: `plugin-install-sources`
- Channel account setup: `channel-account-setup`
- Post-setup probes: `post-setup-probes`
- Remote gateway caveat: `remote-gateway-caveat`

#### Gateway Service Management

- Category id: `cli-install-update-onboard-doctor.gateway-service-management`
- Foreground gateway runs: `foreground-gateway-runs`
- Service install and control: `service-install-and-control`
- Service auth wiring: `agents.create`, `channels.discord-config`, `config.crestodian-setup`
- Drift and reinstall recovery: `drift-and-reinstall-recovery`
- Service health checks: `service-health-checks`

#### CLI Observability

- Category id: `cli-install-update-onboard-doctor.cli-observability`
- Status snapshots: `status-snapshots`
- Health snapshots: `health-snapshots`
- Remote log tailing: `remote-log-tailing`
- Diagnostics export: `diagnostics-export`
- Support-safe redaction: `support-safe-redaction`

#### Doctor

- Category id: `cli-install-update-onboard-doctor.doctor`
- Interactive repair: `interactive-repair`
- Config migration: `config-migration`
- Auth and SecretRef checks: `auth-and-secretref-checks`
- Plugin validation and repair: `plugin-validation-and-repair`
- Lint and JSON findings: `lint-and-json-findings`
- Extra gateway discovery: `extra-gateway-discovery`
- Supervisor drift repair: `supervisor-drift-repair`
- Port and startup diagnosis: `port-and-startup-diagnosis`
- Runtime path checks: `runtime-path-checks`
- Restart guidance: `restart-guidance`

#### Updates and Upgrades

- Category id: `cli-install-update-onboard-doctor.updates-and-upgrades`
- Update channels: `update-channels`
- Install-kind switching: `install-kind-switching`
- Managed gateway restart: `managed-gateway-restart`
- Update status and RPC: `update-status-and-rpc`
- Plugin convergence: `plugin-convergence`

### Plugins

- Surface id: `plugin-sdk-and-bundled-plugin-architecture`

#### Authoring and Packaging plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.authoring-and-packaging-plugins`
- Root SDK entrypoint: `root-sdk-entrypoint`
- Focused SDK imports: `focused-sdk-imports`
- Entrypoint discovery: `entrypoint-discovery`
- Migration shims: `migration-shims`
- Plugin manifest: `plugin-manifest`
- Package metadata: `package-metadata`
- Runtime compatibility: `runtime-compatibility`
- Validation feedback: `validation-feedback`

#### Bundled plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.bundled-plugins`
- Bundled plugin listing: `bundled-plugin-listing`
- Bundled source overlays: `bundled-source-overlays`
- Packaged bundled plugins: `packaged-bundled-plugins`
- Generated plugin inventory: `generated-plugin-inventory`
- Bundled channel IDs: `bundled-channel-ids`

#### Canvas plugin

- Category id: `plugin-sdk-and-bundled-plugin-architecture.canvas-plugin`
- Hosted Canvas and A2UI surfaces: `hosted-canvas-and-a2ui-surfaces`
- Agent canvas tool: `agent-canvas-tool`
- Node Canvas commands: `node-canvas-commands`
- Control UI embeds: `control-ui-embeds`
- Canvas documents: `canvas-documents`
- A2UI transport and snapshots: `a2ui-transport-and-snapshots`

#### Installing and running plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.installing-and-running-plugins`
- Plugin setup: `plugin-setup`
- Runtime activation: `config.hot-apply`, `gateway.performance`, `models.live-openai`, `plugins.before-prompt-build`, `plugins.before-tool-call`, `plugins.hot-reload`, `plugins.kitchen-sink`, `plugins.lifecycle`, `plugins.plugin-tools`, `plugins.runtime`, `plugins.skills`, `runtime.gateway-log-sentinel.plugin-hooks`
- Enable and disable: `config.hot-apply`, `plugins.hot-reload`, `plugins.lifecycle`
- Safe load failures: `plugins.contracts.tools`, `runtime.gateway-log-sentinel.plugin-contracts`
- Dependency repair: `dependency-repair`
- Install update and uninstall: `plugins.hot-install`, `plugins.skills`, `runtime.gateway-restart`, `runtime.package-update`, `runtime.update-run`

#### Channel plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.channel-plugins`
- Inbound event handling: `inbound-event-handling`
- Outbound delivery: `outbound-delivery`
- Ingress authorization: `ingress-authorization`
- Destination resolution: `destination-resolution`
- Native approval prompts: `native-approval-prompts`

#### Provider and tool plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.provider-and-tool-plugins`
- Provider plugins: `provider-plugins`
- Tool plugins: `gateway.performance`, `models.live-openai`, `plugins.before-prompt-build`, `plugins.before-tool-call`, `plugins.kitchen-sink`, `plugins.lifecycle`, `plugins.mcp-tools`, `plugins.plugin-tools`, `runtime.gateway-log-sentinel.plugin-hooks`, `tools.invocation`
- Model catalogs: `model-catalogs`
- Provider auth: `provider-auth`
- Web search and fetch: `web-search-and-fetch`
- Mixed plugins: `config.hot-apply`, `config.restart-apply`, `plugins.capabilities`, `plugins.hot-install`, `plugins.runtime`, `plugins.skills`, `tools.invocation`, `tools.skill-invocation`

#### Plugin approvals

- Category id: `plugin-sdk-and-bundled-plugin-architecture.plugin-approvals`
- Approval requests: `approval-requests`
- Native approval delivery: `native-approval-delivery`
- Same-chat fallbacks: `same-chat-fallbacks`
- Exec and plugin separation: `exec-and-plugin-separation`
- Approval replay protection: `approval-replay-protection`
- Security helpers: `security-helpers`

#### Publishing plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.publishing-plugins`
- Install sources: `install-sources`
- ClawHub publishing: `clawhub-publishing`
- npm publishing: `npm-publishing`
- Compatibility signaling: `compatibility-signaling`
- Update and rollback expectations: `update-and-rollback-expectations`
- Third-party publication rules: `third-party-publication-rules`

#### Testing plugins

- Category id: `plugin-sdk-and-bundled-plugin-architecture.testing-plugins`
- Test fixtures: `test-fixtures`
- Local test environment: `local-test-environment`
- Plugin runtime harness: `plugins.contracts.tools`, `runtime.gateway-log-sentinel.plugin-contracts`
- Unit and integration scaffolds: `unit-and-integration-scaffolds`
- Docker lifecycle suites: `docker-lifecycle-suites`
- Smoke tests: `gateway.performance`, `models.live-openai`, `plugins.kitchen-sink`, `plugins.lifecycle`, `plugins.plugin-tools`

### Agent Runtime

- Surface id: `agent-runtime-and-provider-execution`

#### Agent Turn Execution

- Category id: `agent-runtime-and-provider-execution.agent-turn-execution`
- Turn startup and runtime choice: `agents.create`, `agents.instructions`, `channels.discord-config`, `config.crestodian-setup`, `runtime.first-action`, `runtime.first-hour-20`, `runtime.long-context`
- Session and run coordination: `agents.subagents`, `channels.dedup`, `channels.dm`, `channels.qa-channel`, `channels.reconnect`, `channels.streaming`, `channels.threads`, `commitments.heartbeat-target-none`, `commitments.scope`, `personal.channel-replies`, `runtime.codex-plugin.lifecycle`, `runtime.delivery`, `runtime.fallback-delivery`, `runtime.gateway-restart`, `runtime.restart-recovery`, `runtime.turn-ordering`
- Abort and terminal outcomes: `channels.streaming`, `runtime.delivery`, `runtime.fallback-delivery`, `runtime.long-context`, `runtime.soak-100`

#### External Runtimes and Subagents

- Category id: `agent-runtime-and-provider-execution.external-runtimes-and-subagents`
- External harness selection: `agents.openclaw-harness`, `workspace.planning`
- CLI runtime aliases: `cli-runtime-aliases`
- Subagent turns: `agents.subagents`, `agents.synthesis`, `channels.qa-channel`, `gateway.sessions-list`, `runtime.delivery`, `tools.sessions-spawn`
- Runtime recovery: `runtime-recovery`

#### Hosted Provider Execution

- Category id: `agent-runtime-and-provider-execution.hosted-provider-execution`
- Hosted provider turns: `hosted-provider-turns`
- Provider-specific model options: `provider-specific-model-options`
- Hosted tool use: `hosted-tool-use`
- Reasoning and cache controls: `reasoning-and-cache-controls`
- Hosted streaming and replies: `hosted-streaming-and-replies`

#### Local and Self-hosted Providers

- Category id: `agent-runtime-and-provider-execution.local-and-self-hosted-providers`
- Local provider profiles: `local-provider-profiles`
- Tool-capability flags: `tool-capability-flags`
- Timeouts and context windows: `timeouts-and-context-windows`
- Local smoke checks: `local-smoke-checks`
- Local failure handling: `local-failure-handling`

#### Model and Runtime Selection

- Category id: `agent-runtime-and-provider-execution.model-and-runtime-selection`
- Model reference selection: `models.claude-cli`, `models.provider-capabilities`
- Provider and runtime overrides: `models.switching`, `models.thinking`, `runtime.session-continuity`, `runtime.tool-continuity`
- Thinking and context settings: `models.switching`, `models.thinking`, `runtime.reasoning-visibility`, `runtime.session-continuity`
- Invalid route recovery: `invalid-route-recovery`

#### Provider Auth

- Category id: `agent-runtime-and-provider-execution.provider-auth`
- Login and API-key setup: `models.anthropic`, `models.provider-auth`
- Auth profile selection: `auth-profiles.provider-selection`, `runtime.codex-plugin.auth`
- Credential health checks: `gateway.performance`, `models.live-openai`, `plugins.kitchen-sink`, `plugins.lifecycle`, `plugins.plugin-tools`
- Auth failover: `auth-failover`
- Provider fallback recovery: `memory.failure-handling`, `runtime.fallbacks`
- Rate-limit and capacity recovery: `rate-limit-and-capacity-recovery`
- Missing-key and OAuth guidance: `missing-key-and-oauth-guidance`
- Restart and stale-route recovery: `restart-and-stale-route-recovery`
- Structured provider diagnostics: `structured-provider-diagnostics`
- Subagent credential propagation: `subagent-credential-propagation`

#### Streaming and Progress

- Category id: `agent-runtime-and-provider-execution.streaming-and-progress`
- Streaming replies: `channels.streaming`, `runtime.delivery`, `runtime.fallback-delivery`
- Progress visibility: `models.thinking`, `personal.failure-recovery`, `personal.no-fake-progress`, `personal.task-followthrough`, `runtime.reasoning-visibility`, `tools.evidence`

#### Tool Calls and Response Handling

- Category id: `agent-runtime-and-provider-execution.tool-calls-and-response-handling`
- Tool-call handling: `models.switching`, `personal.no-fake-progress`, `personal.task-followthrough`, `personal.tool-safety`, `runtime.approvals`, `runtime.codex-native-workspace.read`, `runtime.prompt-compatibility`, `runtime.tool-continuity`, `tools.apply-patch`, `tools.edit`, `tools.evidence`, `tools.followthrough`, `tools.fs.list`, `tools.fs.read`, `tools.fs.write`, `tools.grep`, `workspace.artifacts`
- Usage and response reporting: `agents.subagents`, `agents.synthesis`
- Failure recovery: `personal.failure-recovery`, `personal.no-fake-progress`, `runtime.empty-response-recovery`, `runtime.reasoning-only-recovery`, `runtime.retry-policy`, `tools.evidence`

#### Tool Execution Controls

- Category id: `agent-runtime-and-provider-execution.tool-execution-controls`
- Tool availability rules: `qa.artifact-safety`, `runtime.inventory`, `runtime.tool-policy`, `security.redaction`
- Sandboxed exec behavior: `sandboxed-exec-behavior`
- Approval flow: `personal.approval-denial`, `personal.tool-safety`, `runtime.approvals`, `tools.followthrough`, `tools.safety`
- Elevated execution: `elevated-execution`
- Tool safety controls: `personal.approval-denial`, `personal.tool-safety`, `runtime.approvals`, `tools.followthrough`, `tools.safety`
- Delegated tool access: `delegated-tool-access`

### Session, memory, and context engine

- Surface id: `session-memory-and-context-engine`

#### CLI Session and Transcript Management

- Category id: `session-memory-and-context-engine.cli-session-and-transcript-management`
- CLI Session: `cli-session`
- Transcript Management: `transcript-management`

#### Token Management

- Category id: `session-memory-and-context-engine.token-management`
- Compaction: `runtime.compaction`, `runtime.empty-response-recovery`, `runtime.reasoning-only-recovery`, `runtime.retry-policy`
- Pruning: `pruning`
- Token Pressure: `runtime.codex-app-server`, `runtime.first-hour-20`, `runtime.gateway-log-sentinel.codex-progress`, `runtime.long-context`, `runtime.soak-100`

#### Context Engine

- Category id: `session-memory-and-context-engine.context-engine`
- Context Engine: `docs.discovery`, `workspace.artifacts`, `workspace.long-running-task`, `workspace.repo-discovery`
- Runtime Assembly: `agents.openclaw-harness`, `models.codex-cli`, `workspace.planning`

#### Cross-client History and Session Parity

- Category id: `session-memory-and-context-engine.cross-client-history-and-session-parity`
- Cross-client History: `channels.threads`, `memory.thread-isolation`
- Session Parity: `models.switching`, `models.thinking`, `runtime.session-continuity`

#### Diagnostics, Maintenance, and Recovery

- Category id: `session-memory-and-context-engine.diagnostics-maintenance-and-recovery`
- Session diagnostic reports: `session-diagnostic-reports`
- Session maintenance warnings: `session-maintenance-warnings`
- Session and transcript recovery: `config.restart-apply`, `memory.failure-handling`, `runtime.delivery`, `runtime.fallbacks`, `runtime.gateway-restart`, `runtime.package-update`, `runtime.restart-recovery`, `runtime.update-run`

#### Core Prompts and Context

- Category id: `session-memory-and-context-engine.core-prompts-and-context`
- Instruction Profile: `agents.instructions`, `character.persona`, `runtime.first-action`, `workspace.artifacts`
- Context Visibility: `docs.discovery`, `models.codex-cli`, `runtime.no-meta-leak`, `workspace.repo-discovery`

#### Memory

- Category id: `session-memory-and-context-engine.memory`
- Memory Backend Storage: `memory-backend-storage`
- Embedding Search: `channels.qa-channel`, `memory.active-recall`, `memory.ranking`, `memory.recall`, `personal.memory-recall`
- Memory Files: `memory.dreaming`, `memory.promotion`, `qa.artifact-safety`
- Memory search and store tools: `channels.group-messages`, `channels.qa-channel`, `memory.active-recall`, `memory.ranking`, `memory.recall`, `memory.tools`, `personal.memory-recall`, `tools.memory.add`, `tools.memory.recall`
- Active Memory: `channels.qa-channel`, `memory.active-recall`, `memory.recall`, `personal.memory-recall`

#### Session Routing

- Category id: `session-memory-and-context-engine.session-routing`
- Session Routing: `session-routing`
- Conversation routing: `channels.webchat`, `runtime.direct-reply-routing`, `tools.message`

#### Transcript Persistence

- Category id: `session-memory-and-context-engine.transcript-persistence`
- Transcript Persistence: `transcript-persistence`
- Durability: `durability`

### Channel framework

- Surface id: `channel-framework`

#### Channel Actions Commands and Approvals

- Category id: `channel-framework.channel-actions-commands-and-approvals`
- Channel-native commands: `channel-native-commands`
- Native command session target: `native-command-session-target`
- Message actions: `message-actions`
- Message tool API discovery: `message-tool-api-discovery`
- Channel-native approval prompts: `channel-native-approval-prompts`

#### Channel Setup

- Category id: `channel-framework.channel-setup`
- Supported channel catalog: `supported-channel-catalog`
- Channel status taxonomy in channels list: `channel-status-taxonomy-in-channels-list`
- Setup/onboarding flows: `agents.create`, `channels.discord-config`, `config.crestodian-setup`
- Install-on-demand: `install-on-demand`
- Setup wizard metadata: `setup-wizard-metadata`

#### Group Thread and Ambient Room Behavior

- Category id: `channel-framework.group-thread-and-ambient-room-behavior`
- Group/channel session isolation: `channels.group-messages`, `channels.qa-channel`, `memory.tools`
- Mention-required: `channels.group-visible-replies`, `channels.qa-channel`, `tools.message`
- Native threads: `channels.dm`, `channels.qa-channel`, `channels.threads`, `memory.thread-isolation`, `personal.channel-replies`
- Broadcast groups: `broadcast-groups`
- Bot-loop protection: `bot-loop-protection`

#### Inbound Access and Identity Gates

- Category id: `channel-framework.inbound-access-and-identity-gates`
- DM pairing: `dm-pairing`
- Group/channel allowlists: `group-channel-allowlists`
- Access group expansion: `access-group-expansion`
- Mention gating: `mention-gating`
- Sanitized inbound identity/route projections: `sanitized-inbound-identity-route-projections`

#### Media Attachments and Rich Channel Data

- Category id: `channel-framework.media-attachments-and-rich-channel-data`
- Inbound media normalization: `inbound-media-normalization`
- Outbound direct text/media sends: `outbound-direct-text-media-sends`
- Provider-specific channelData: `provider-specific-channeldata`
- Media roots: `media-roots`

#### Outbound Delivery and Reply Pipeline

- Category id: `channel-framework.outbound-delivery-and-reply-pipeline`
- Automatic final reply delivery: `agents.subagents`, `channels.dedup`, `channels.direct-visible-replies`, `channels.dm`, `channels.group-visible-replies`, `channels.qa-channel`, `channels.reconnect`, `channels.streaming`, `channels.threads`, `commitments.heartbeat-target-none`, `commitments.scope`, `personal.channel-replies`, `runtime.delivery`, `runtime.fallback-delivery`, `runtime.gateway-restart`, `runtime.restart-recovery`, `tools.message`
- Durable outbound send orchestration: `channels.dedup`, `channels.reconnect`, `runtime.delivery`
- Reply pipeline transforms: `channels.message-actions`, `channels.qa-channel`
- Provider outbound adapter bridge: `channels.direct-visible-replies`, `channels.group-visible-replies`, `channels.qa-channel`, `channels.webchat`, `runtime.direct-reply-routing`, `tools.message`, `tools.message-tool`

#### Conversation Routing and Delivery

- Category id: `channel-framework.conversation-routing-and-delivery`
- Inbound conversation routing: `channels.dm`, `channels.qa-channel`, `channels.threads`, `personal.channel-replies`
- Session key construction: `session-key-construction`
- Agent selection precedence: `agent-selection-precedence`
- Runtime conversation routing: `runtime-conversation-routing`
- Thread/parent-child placement: `thread-parent-child-placement`
- Plugin registry resolution: `agents.subagents`, `channels.direct-visible-replies`, `channels.dm`, `channels.group-messages`, `channels.group-visible-replies`, `channels.message-actions`, `channels.qa-channel`, `channels.threads`, `media.image-generation`, `media.image-understanding`, `memory.recall`, `personal.channel-replies`, `personal.memory-recall`, `personal.reminders`, `runtime.delivery`, `scheduling.cron`, `scheduling.dedup`, `tools.message`, `ui.control`
- Channel account startup: `channel-account-startup`
- Whole-channel lifecycle controls: `whole-channel-lifecycle-controls`
- Config/secrets reload interactions: `config-secrets-reload-interactions`
- Auto-restart: `auto-restart`

#### Status Health and Operator Controls

- Category id: `channel-framework.status-health-and-operator-controls`
- channels.status: `channels-status`
- Channel health policy: `channels.dedup`, `channels.reconnect`, `runtime.delivery`
- Operator CLI controls: `operator-cli-controls`
- Status read-model: `status-read-model`

### Security, auth, pairing, and secrets

- Surface id: `security-auth-pairing-and-secrets`

#### Approval Policy and Tool Safeguards

- Category id: `security-auth-pairing-and-secrets.approval-policy-and-tool-safeguards`
- Approval Policy: `personal.approval-denial`, `personal.tool-safety`, `runtime.approvals`, `tools.followthrough`, `tools.safety`
- Dangerous Tool Safeguards: `dangerous-tool-safeguards`

#### Gateway Auth and Remote Access

- Category id: `security-auth-pairing-and-secrets.gateway-auth-and-remote-access`
- Shared Gateway token/password auth: `shared-gateway-token-password-auth`
- Gateway auth mode: `gateway-auth-mode`
- Trusted-proxy identity: `trusted-proxy-identity`
- Tailscale Serve/Funnel: `tailscale-serve-funnel`
- Bind and origin restrictions: `bind-and-origin-restrictions`
- WebSocket handshake auth: `websocket-handshake-auth`
- Operator-facing docs: `operator-facing-docs`
- Browser Control UI: `browser-control-ui`
- Remote Client Trust: `remote-client-trust`

#### Channel Access Control

- Category id: `security-auth-pairing-and-secrets.channel-access-control`
- Channel Identity: `channel-identity`
- Allowlists: `allowlists`
- Sender Pairing: `sender-pairing`

#### Device and Node Pairing

- Category id: `security-auth-pairing-and-secrets.device-and-node-pairing`
- Setup codes: `setup-codes`
- Device identity creation: `device-identity-creation`
- Device-token issuance: `device-token-issuance`
- Device pairing approvals for operator: `device-pairing-approvals-for-operator`
- Operator scopes that gate pairing: `operator-scopes-that-gate-pairing`
- Local Control UI: `local-control-ui`
- Auth migration: `auth-migration`
- Operator-facing docs: `operator-facing-docs`
- Node Pairing: `node-pairing`
- Capability Trust: `capability-trust`
- Remote Exec Approvals: `remote-exec-approvals`

#### Plugin Trust

- Category id: `security-auth-pairing-and-secrets.plugin-trust`
- Plugin Installation Trust: `plugin-installation-trust`
- Security Boundaries: `security-boundaries`

#### Credential and Secret Hygiene

- Category id: `security-auth-pairing-and-secrets.credential-and-secret-hygiene`
- Provider Auth Profiles: `provider-auth-profiles`
- API Key Health: `api-key-health`
- Secrets Storage: `secrets-storage`
- Redaction: `memory.dreaming`, `memory.promotion`, `personal.diagnostics`, `personal.redaction`, `qa.artifact-safety`, `runtime.tool-policy`, `security.redaction`
- Configuration Hygiene: `configuration-hygiene`

### Observability

- Surface id: `telemetry-diagnostics-and-observability`

#### Health and Repair

- Category id: `telemetry-diagnostics-and-observability.health-and-repair`
- Background health-monitor loop: `background-health-monitor-loop`
- Per-account enable/disable settings: `per-account-enable-disable-settings`
- Startup grace: `startup-grace`
- Restart logging: `restart-logging`
- openclaw doctor: `runtime.codex-plugin.auth`, `runtime.codex-plugin.lifecycle`, `runtime.doctor-repair`
- Structured health checks: `structured-health-checks`
- Core doctor checks: `core-doctor-checks`
- Plugin SDK doctor/health contracts: `plugin-sdk-doctor-health-contracts`
- openclaw status: `openclaw-status`
- openclaw health: `openclaw-health`
- Gateway RPC health: `gateway-rpc-health`
- Cached health snapshots: `gateway.performance`, `models.live-openai`, `plugins.kitchen-sink`, `plugins.lifecycle`, `plugins.plugin-tools`

#### Logging

- Category id: `telemetry-diagnostics-and-observability.logging`
- Rolling Gateway JSONL file logs: `rolling-gateway-jsonl-file-logs`
- openclaw logs: `openclaw-logs`
- Gateway RPC logs.tail: `gateway-rpc-logs-tail`
- Redaction patterns and sinks: `redaction-patterns-and-sinks`
- Trace correlation fields: `trace-correlation-fields`

#### Diagnostic Collection

- Category id: `telemetry-diagnostics-and-observability.diagnostic-collection`
- openclaw gateway diagnostics export: `openclaw-gateway-diagnostics-export`
- openclaw gateway stability --bundle: `openclaw-gateway-stability-bundle`
- Chat /diagnostics: `chat-diagnostics`
- Support zip composition: `personal.diagnostics`, `personal.redaction`, `qa.artifact-safety`
- Bounded in-process stability recorder: `bounded-in-process-stability-recorder`
- openclaw gateway stability: `openclaw-gateway-stability`
- Memory pressure events: `memory-pressure-events`
- Critical memory pressure snapshot option: `critical-memory-pressure-snapshot-option`

#### Telemetry Export

- Category id: `telemetry-diagnostics-and-observability.telemetry-export`
- Diagnostic event types: `diagnostic-event-types`
- Async dispatch: `async-dispatch`
- W3C trace context creation: `w3c-trace-context-creation`
- Plugin SDK diagnostic runtime exports: `plugin-sdk-diagnostic-runtime-exports`
- Model-call diagnostic events: `model-call-diagnostic-events`
- diagnostics-otel plugin install: `diagnostics-otel-plugin-install`
- OTLP/HTTP traces: `harness.qa-lab`, `telemetry.otel`
- Trusted trace context: `trusted-trace-context`
- Model and runtime telemetry: `docker.e2e`, `harness.qa-lab`, `harness.tool-trace-visibility`, `personal.failure-recovery`, `personal.no-fake-progress`, `personal.task-followthrough`, `runtime.qa-bus`, `telemetry.otel`, `telemetry.prometheus`, `tools.evidence`, `tools.trace`
- diagnostics-prometheus plugin install: `diagnostics-prometheus-plugin-install`
- Gateway-authenticated GET /api/diagnostics/prometheus: `gateway-authenticated-get-api-diagnostics-prometheus`
- Prometheus text exposition: `docker.e2e`, `harness.qa-lab`, `telemetry.prometheus`
- Trusted diagnostic event subscription: `trusted-diagnostic-event-subscription`

#### Session Diagnostics

- Category id: `telemetry-diagnostics-and-observability.session-diagnostics`
- session.state: `session-state`
- Diagnostic session activity snapshots: `diagnostic-session-activity-snapshots`
- Model usage: `model-usage`
- Export of session signals to stability: `export-of-session-signals-to-stability`

### Automation: cron, hooks, tasks, polling

- Surface id: `automation-cron-hooks-tasks-polling`

#### Cron Jobs

- Category id: `automation-cron-hooks-tasks-polling.cron-jobs`
- Create/edit/remove jobs: `create-edit-remove-jobs`
- Schedule types: `schedule-types`
- Timezone and stagger: `timezone-and-stagger`
- Cron RPCs: `cron-rpcs`
- Agent cron tool: `channels.qa-channel`, `personal.reminders`, `scheduling.cron`
- Manual cron runs: `channels.qa-channel`, `personal.reminders`, `scheduling.cron`, `scheduling.dedup`
- Isolated cron execution: `channels.qa-channel`, `personal.reminders`, `scheduling.cron`, `scheduling.dedup`
- Model/provider preflight: `model-provider-preflight`
- Run history: `channels.qa-channel`, `scheduling.cron`, `scheduling.dedup`
- Timeout and denial diagnostics: `timeout-and-denial-diagnostics`
- Chat announce delivery: `chat-announce-delivery`
- Webhook delivery: `webhook-delivery`
- Failure destinations: `failure-destinations`
- Skipped-run alerts: `skipped-run-alerts`
- Delivery previews: `delivery-previews`

#### Event Ingress

- Category id: `automation-cron-hooks-tasks-polling.event-ingress`
- Telegram long polling: `telegram-long-polling`
- Telegram webhook mode: `telegram-webhook-mode`
- Zalo polling/webhook mode: `zalo-polling-webhook-mode`
- Polling stall diagnostics: `polling-stall-diagnostics`
- iMessage watch fallback: `imessage-watch-fallback`
- Gmail setup wizard: `gmail-setup-wizard`
- Watcher start/serve: `watcher-start-serve`
- Tailscale/public routing: `tailscale-public-routing`
- Push token validation: `push-token-validation`
- Gmail event routing: `gmail-event-routing`
- POST /hooks/wake: `post-hooks-wake`
- POST /hooks/agent: `post-hooks-agent`
- Mapped hooks: `mapped-hooks`
- Hook auth policy: `hook-auth-policy`
- Async dispatch: `async-dispatch`

#### Automation Hooks

- Category id: `automation-cron-hooks-tasks-polling.automation-hooks`
- HOOK.md authoring: `hook-md-authoring`
- Hook discovery: `hook-discovery`
- Hook CLI management: `hook-cli-management`
- Hook packs: `hook-packs`
- Lifecycle event dispatch: `lifecycle-event-dispatch`
- api.on registration: `api-on-registration`
- Tool-call policy hooks: `tool-call-policy-hooks`
- Message hooks: `message-hooks`
- Session/lifecycle hooks: `session-lifecycle-hooks`
- Plugin approval requests: `plugin-approval-requests`
- cron_changed: `cron-changed`

#### Background Tasks and Flows

- Category id: `automation-cron-hooks-tasks-polling.background-tasks-and-flows`
- Task list/show/cancel: `task-list-show-cancel`
- Task notifications: `task-notifications`
- Task audit and maintenance: `task-audit-and-maintenance`
- Chat task board: `chat-task-board`
- Task pressure status: `task-pressure-status`
- Managed flows: `managed-flows`
- Mirrored flows: `mirrored-flows`
- openclaw tasks flow: `openclaw-tasks-flow`
- Flow audit and maintenance: `flow-audit-and-maintenance`
- Plugin managedFlows: `plugin-managedflows`

#### Heartbeat

- Category id: `automation-cron-hooks-tasks-polling.heartbeat`
- Heartbeat scheduling: `heartbeat-scheduling`
- Active hours: `active-hours`
- Wake and cooldown handling: `wake-and-cooldown-handling`
- Due-only heartbeat tasks: `due-only-heartbeat-tasks`
- Commitment check-ins: `commitments.heartbeat-target-none`, `commitments.scope`, `runtime.delivery`

#### Polling Controls

- Category id: `automation-cron-hooks-tasks-polling.polling-controls`
- openclaw message poll: `openclaw-message-poll`
- Telegram polls: `telegram-polls`
- Teams polls: `teams-polls`
- Poll flags: `poll-flags`
- Channel capability gates: `channel-capability-gates`
- process poll: `process-poll`
- process log: `process-log`
- Background process status: `background-process-status`
- No-progress loop detection: `no-progress-loop-detection`
- Process input controls: `process-input-controls`

### Media understanding and media generation

- Surface id: `media-understanding-and-media-generation`

#### Media Intake and Access

- Category id: `media-understanding-and-media-generation.media-intake-and-access`
- Local and remote media references: `local-and-remote-media-references`
- MIME and type detection: `mime-and-type-detection`
- Size caps and bounded reads: `size-caps-and-bounded-reads`
- Safe remote fetch: `safe-remote-fetch`
- Local root policy: `local-root-policy`
- Inbound media store: `inbound-media-store`
- PDF/document extraction dispatch: `pdf-document-extraction-dispatch`
- QR and media helper classification: `qr-and-media-helper-classification`

#### Channel Media Handling

- Category id: `media-understanding-and-media-generation.channel-media-handling`
- Inbound attachment staging: `inbound-attachment-staging`
- Sandbox media rewrites: `sandbox-media-rewrites`
- Reply media templating: `reply-media-templating`
- Message-tool attachment delivery: `message-tool-attachment-delivery`
- Duplicate delivery suppression: `duplicate-delivery-suppression`

#### Media Configuration

- Category id: `media-understanding-and-media-generation.media-configuration`
- Media capability configuration: `media-capability-configuration`

#### Text-to-Speech Delivery

- Category id: `media-understanding-and-media-generation.text-to-speech-delivery`
- TTS: `tts`
- Outbound Voice Audio Delivery: `outbound-voice-audio-delivery`

#### Media Understanding

- Category id: `media-understanding-and-media-generation.media-understanding`
- Audio attachment selection: `audio-attachment-selection`
- Batch STT provider and CLI fallback: `batch-stt-provider-and-cli-fallback`
- Voice-note mention preflight: `voice-note-mention-preflight`
- Transcript insertion and echo: `transcript-insertion-and-echo`
- Audio proxy and limit handling: `audio-proxy-and-limit-handling`
- Inbound image summarization: `channels.qa-channel`, `media.image-understanding`, `ui.control`
- Active vision model bypass: `active-vision-model-bypass`
- Text-only model media offload: `text-only-model-media-offload`
- Vision provider fallback: `vision-provider-fallback`
- Image and PDF input routing: `image-and-pdf-input-routing`
- Video Understanding: `video-understanding`
- Direct Video Analysis: `direct-video-analysis`

#### Media Generation

- Category id: `media-understanding-and-media-generation.media-generation`
- Image generation tool invocation: `channels.qa-channel`, `media.image-generation`, `tools.image-generate`, `tools.native-image-generation`
- Provider and model selection: `media.image-generation`, `tools.native-image-generation`
- Reference image editing: `reference-image-editing`
- Generated image task lifecycle: `generated-image-task-lifecycle`
- Generated image persistence and delivery: `generated-image-persistence-and-delivery`
- Music generation tool invocation: `music-generation-tool-invocation`
- Provider and model selection: `provider-and-model-selection-2`
- Lyrics, instrumental, duration, and format controls: `lyrics-instrumental-duration-and-format-controls`
- Reference inputs where supported: `reference-inputs-where-supported`
- Music task lifecycle and duplicate status: `music-task-lifecycle-and-duplicate-status`
- Generated audio persistence and delivery: `tools.tts`
- Video generation tool invocation: `video-generation-tool-invocation`
- Mode and provider capability selection: `mode-and-provider-capability-selection`
- Reference image, video, and audio inputs: `reference-image-video-and-audio-inputs`
- Provider option validation: `provider-option-validation`
- Video task lifecycle and status: `video-task-lifecycle-and-status`
- Generated video persistence and delivery: `generated-video-persistence-and-delivery`

### Voice and realtime talk

- Surface id: `voice-and-realtime-talk`

#### Talk Providers

- Category id: `voice-and-realtime-talk.talk-providers`
- OpenAI Realtime voice backend bridge: `openai-realtime-voice-backend-bridge`
- Google Gemini Live backend bridge: `google-gemini-live-backend-bridge`
- Realtime voice provider SDK contracts: `realtime-voice-provider-sdk-contracts`
- Provider diagnostics: `provider-diagnostics`
- Talk catalog: `talk-catalog`
- Talk provider config: `talk-provider-config`
- Shared native config parsing: `shared-native-config-parsing`

#### Realtime Talk Sessions

- Category id: `voice-and-realtime-talk.realtime-talk-sessions`
- Agent consult handoff: `agent-consult-handoff`
- Active Talk agent-run status: `active-talk-agent-run-status`
- Talkback runtime behavior: `talkback-runtime-behavior`
- Forced consult scheduling: `forced-consult-scheduling`
- Browser Talk start/stop UI: `browser-talk-start-stop-ui`
- Browser WebRTC sessions: `browser-webrtc-sessions`
- Browser relay mode: `browser-relay-mode`
- Browser tool-call forwarding: `browser-tool-call-forwarding`
- Realtime session controls: `realtime-session-controls`
- Gateway relay sessions: `gateway-relay-sessions`
- Audio-frame limits: `audio-frame-limits`

#### Speech and Transcription

- Category id: `voice-and-realtime-talk.speech-and-transcription`
- Voice directives: `voice-directives`
- Talk speech playback: `talk-speech-playback`
- Transcription relay sessions: `transcription-relay-sessions`
- Realtime transcription providers: `realtime-transcription-providers`
- Native directive parsing: `native-directive-parsing`

#### Native App Talk

- Category id: `voice-and-realtime-talk.native-app-talk`
- macOS native Talk mode: `macos-native-talk-mode`
- iOS Talk mode: `ios-talk-mode`
- Android Talk mode: `android-talk-mode`
- Shared Talk config: `shared-talk-config`

#### Voice Wake and Routing

- Category id: `voice-and-realtime-talk.voice-wake-and-routing`
- Wake-word settings: `wake-word-settings`
- Wake routing: `wake-routing`
- macOS Voice Wake runtime: `macos-voice-wake-runtime`
- Mobile wake preferences: `mobile-wake-preferences`

#### Talk Observability

- Category id: `voice-and-realtime-talk.talk-observability`
- Talk event logging: `talk-event-logging`
- Session-log health: `session-log-health`
- Live smoke output: `live-smoke-output`
- Prometheus diagnostic counters: `prometheus-diagnostic-counters`
- Operator visibility into setup: `operator-visibility-into-setup`

### Gateway Web App

- Surface id: `browser-control-ui-and-webchat`

#### Browser Realtime Talk

- Category id: `browser-control-ui-and-webchat.browser-realtime-talk`
- Browser Talk start/stop: `browser-talk-start-stop`
- Provider session selection: `provider-session-selection`
- Gateway relay audio: `gateway-relay-audio`
- Tool-call consults: `tool-call-consults`
- Steer and cancel: `steer-and-cancel`

#### Browser Access and Trust

- Category id: `browser-control-ui-and-webchat.browser-access-and-trust`
- Device pairing: `device-pairing`
- Token/password auth: `token-password-auth`
- Tailscale Serve auth: `tailscale-serve-auth`
- Trusted proxy auth: `trusted-proxy-auth`
- Allowed origins/gatewayUrl: `allowed-origins-gatewayurl`

#### Configuration

- Category id: `browser-control-ui-and-webchat.configuration`
- Config snapshots: `config-snapshots`
- Schema form editing: `schema-form-editing`
- Raw JSON editing: `raw-json-editing`
- Base-hash guarded writes: `base-hash-guarded-writes`
- Apply and restart: `apply-and-restart`

#### Browser UI

- Category id: `browser-control-ui-and-webchat.browser-ui`
- Gateway-hosted UI: `channels.qa-channel`, `media.image-understanding`, `ui.control`
- Dashboard open/auth bootstrap: `dashboard-open-auth-bootstrap`
- Base-path routing: `base-path-routing`
- Static asset recovery: `static-asset-recovery`
- Dev gatewayUrl target: `dev-gatewayurl-target`
- PWA install metadata: `pwa-install-metadata`
- Service worker updates: `service-worker-updates`
- VAPID keys: `vapid-keys`
- Subscribe/unsubscribe: `subscribe-unsubscribe`
- Test notifications: `test-notifications`

#### WebChat Conversations

- Category id: `browser-control-ui-and-webchat.webchat-conversations`
- Send and abort: `send-and-abort`
- Session and agent picker: `session-and-agent-picker`
- Model/thinking controls: `model-thinking-controls`
- Attachments: `attachments`
- Markdown/tool/media rendering: `markdown-tool-media-rendering`
- chat.history projection: `chat-history-projection`
- chat.send lifecycle: `channels.qa-channel`, `channels.webchat`, `media.image-understanding`, `runtime.direct-reply-routing`, `tools.message`, `ui.control`
- Abort/partial retention: `abort-partial-retention`
- Injected assistant notes: `injected-assistant-notes`
- Reconnect continuity: `reconnect-continuity`
- Hosted embeds: `hosted-embeds`
- External embed gating: `external-embed-gating`
- Assistant media tickets: `assistant-media-tickets`
- Authenticated avatars: `authenticated-avatars`
- CSP image policy: `csp-image-policy`

#### Operator Console

- Category id: `browser-control-ui-and-webchat.operator-console`
- Health/status/models: `health-status-models`
- Live log tail: `live-log-tail`
- Update run/status: `runtime.gateway-restart`, `runtime.package-update`, `runtime.update-run`
- Activity summaries: `activity-summaries`
- RPC timing telemetry: `rpc-timing-telemetry`
- Channels/login: `channels-login`
- Session manager and history: `session-manager-and-history`
- Cron: `cron`
- Skills/nodes: `skills-nodes`
- Exec approvals/agents: `exec-approvals-agents`

### TUI

- Surface id: `tui-and-terminal-ux`

#### Runtime Modes

- Category id: `tui-and-terminal-ux.runtime-modes`
- Gateway TUI launch: `gateway-tui-launch`
- Local chat launch: `local-chat-launch`
- Terminal alias launch: `terminal-alias-launch`
- Initial message launch: `initial-message-launch`
- Launch option validation: `launch-option-validation`
- Gateway connection: `gateway-connection`
- Gateway authentication: `gateway-authentication`
- History load on attach: `history-load-on-attach`
- Reconnect visibility: `reconnect-visibility`
- Gateway command RPCs: `gateway-command-rpcs`
- Embedded local chat: `embedded-local-chat`
- Local auth flow: `local-auth-flow`
- Config repair loop: `config-repair-loop`
- Gateway-free recovery: `gateway-free-recovery`

#### Input and Commands

- Category id: `tui-and-terminal-ux.input-and-commands`
- Message composition: `message-composition`
- Input history: `input-history`
- Keyboard shortcuts: `keyboard-shortcuts`
- Paste and busy-submit handling: `paste-and-busy-submit-handling`
- IME and AltGr handling: `ime-and-altgr-handling`
- Slash Commands: `slash-commands`
- Pickers: `pickers`
- Settings: `settings`

#### Session Management

- Category id: `tui-and-terminal-ux.session-management`
- Session Lifecycle: `session-lifecycle`
- History: `history`
- Resume: `resume`

#### Local Shell Execution

- Category id: `tui-and-terminal-ux.local-shell-execution`
- Bang-command routing: `bang-command-routing`
- Approval prompt: `approval-prompt`
- Command output display: `command-output-display`
- Execution environment marker: `execution-environment-marker`

#### Rendering and Output Safety

- Category id: `tui-and-terminal-ux.rendering-and-output-safety`
- Streaming Message Rendering: `streaming-message-rendering`
- Tool Cards: `tool-cards`
- Terminal Rendering Primitives: `terminal-rendering-primitives`
- Output Safety: `output-safety`

### ClawHub

- Surface id: `clawhub-and-external-plugin-distribution`

#### Publishing

- Category id: `clawhub-and-external-plugin-distribution.publishing`
- ClawHub package publishing owner: `clawhub-package-publishing-owner`
- OpenClaw-owned package release validation for ClawHub: `openclaw-owned-package-release-validation-for-clawhub`
- Version bump gates: `version-bump-gates`
- npm trusted publishing provenance: `npm-trusted-publishing-provenance`
- External code plugin package contract required: `external-code-plugin-package-contract-required`
- Skill package metadata: `skill-package-metadata`
- Skill publishing flow: `skill-publishing-flow`

#### Catalog Discovery

- Category id: `clawhub-and-external-plugin-distribution.catalog-discovery`
- openclaw plugins search as the ClawHub: `openclaw-plugins-search-as-the-clawhub`
- Search result metadata: `search-result-metadata`
- Distinction between plugin search: `distinction-between-plugin-search`
- Catalog lookup failure: `catalog-lookup-failure`
- Skill catalog search: `skill-catalog-search`

#### Compatibility and Trust

- Category id: `clawhub-and-external-plugin-distribution.compatibility-and-trust`
- openclaw.compat.pluginApi: `openclaw-compat-pluginapi`
- ClawHub package compatibility validation: `clawhub-package-compatibility-validation`
- npm compatibility fallback to the newest: `npm-compatibility-fallback-to-the-newest`
- Official external plugin catalog behavior: `official-external-plugin-catalog-behavior`
- Compatibility docs: `compatibility-docs`
- Operator trust model for installing: `operator-trust-model-for-installing`
- ClawHub archive: `clawhub-archive`
- npm integrity drift: `npm-integrity-drift`
- Built-in dangerous-code scanner: `built-in-dangerous-code-scanner`
- ClawHub publishing review/hidden-release behavior as upstream: `clawhub-publishing-review-hidden-release-behavior-as-upstream`
- Skill archive safety: `skill-archive-safety`
- Skill audit signals: `skill-audit-signals`

#### Plugin Lifecycle and Health

- Category id: `clawhub-and-external-plugin-distribution.plugin-lifecycle-and-health`
- Source prefixes: `source-prefixes`
- Bare package behavior during the launch: `bare-package-behavior-during-the-launch`
- Explicit pinned versions: `explicit-pinned-versions`
- Managed install records that preserve source: `managed-install-records-that-preserve-source`
- Codex: `codex`
- Local: `local`
- Marketplace list: `marketplace-list`
- Supported mapped features: `supported-mapped-features`
- Remote marketplace path safety: `remote-marketplace-path-safety`
- Update by plugin id: `update-by-plugin-id`
- Reinstall vs update semantics: `reinstall-vs-update-semantics`
- Downgrade: `downgrade`
- Uninstall config/index/policy/file cleanup: `uninstall-config-index-policy-file-cleanup`
- Gateway restart/reload requirements after: `gateway-restart-reload-requirements-after`
- Per-plugin managed npm project: `per-plugin-managed-npm-project`
- npm-pack local release-candidate installs: `npm-pack-local-release-candidate-installs`
- Dependency ownership between plugin packages: `dependency-ownership-between-plugin-packages`
- Peer dependency relinking: `peer-dependency-relinking`
- Legacy dependency root cleanup: `legacy-dependency-root-cleanup`
- plugins list: `plugins-list`
- Local plugin index: `local-plugin-index`
- Troubleshooting stale config: `troubleshooting-stale-config`
- Runtime verification after Gateway: `runtime-verification-after-gateway`
- ClawHub skill installs: `clawhub-skill-installs`
- Skill upload install path: `skill-upload-install-path`
- Skill dependency installers: `skill-dependency-installers`

### OpenClaw App SDK

- Surface id: `openclaw-app-sdk`

#### Client API

- Category id: `openclaw-app-sdk.client-api`
- SDK entrypoints: `sdk-entrypoints`
- Namespace layout: `namespace-layout`
- Package split: `package-split`
- App/plugin boundary: `app-plugin-boundary`

#### Gateway Access

- Category id: `openclaw-app-sdk.gateway-access`
- Gateway connect: `gateway-connect`
- URL and token config: `url-and-token-config`
- Auto gateway: `auto-gateway`
- Custom transport: `custom-transport`
- Scopes and redaction: `scopes-and-redaction`

#### Agent Conversations

- Category id: `openclaw-app-sdk.agent-conversations`
- Agent handles: `agent-handles`
- Agent runs: `agent-runs`
- Run results: `run-results`
- Session creation: `session-creation`
- Session send: `session-send`
- Session controls: `session-controls`

#### Events and Approvals

- Category id: `openclaw-app-sdk.events-and-approvals`
- Event stream: `event-stream`
- Event envelope: `event-envelope`
- Replay cursors: `replay-cursors`
- Approval callbacks: `approval-callbacks`
- Questions: `questions`

#### Resource Helpers

- Category id: `openclaw-app-sdk.resource-helpers`
- Models: `models`
- ToolSpace: `toolspace`
- Artifacts: `character.persona`, `personal.task-followthrough`, `tools.followthrough`, `workspace.artifacts`, `workspace.builds`, `workspace.long-running-task`, `workspace.repo-discovery`
- Tasks: `tasks`
- Environments: `environments`

#### Compatibility

- Category id: `openclaw-app-sdk.compatibility`
- Generated client: `generated-client`
- Ergonomic wrappers: `ergonomic-wrappers`
- Unsupported calls: `unsupported-calls`
- Schema alignment: `schema-alignment`
- Public package contract: `public-package-contract`

## Platform

### macOS Gateway host

- Surface id: `macos-gateway-host`

#### CLI Setup

- Category id: `macos-gateway-host.cli-setup`
- Hosted installer: `hosted-installer`
- Node 24 recommendation: `node-24-recommendation`
- App-triggered CLI install: `app-triggered-cli-install`
- Shell PATH and version-manager drift: `shell-path-and-version-manager-drift`

#### Local Gateway Integration

- Category id: `macos-gateway-host.local-gateway-integration`
- App local/remote connection mode: `app-local-remote-connection-mode`
- App-managed Gateway LaunchAgent install/restart/uninstall: `app-managed-gateway-launchagent-install-restart-uninstall`
- CLI install detection: `cli-install-detection`
- Attach-to-existing local Gateway compatibility: `attach-to-existing-local-gateway-compatibility`
- Gateway endpoint: `gateway-endpoint`
- gateway.mode=local configuration: `gateway-mode-local-configuration`
- Loopback bind: `loopback-bind`
- Local app endpoint resolution: `local-app-endpoint-resolution`
- Bonjour discovery: `bonjour-discovery`

#### Remote Gateway Mode

- Category id: `macos-gateway-host.remote-gateway-mode`
- macOS app "Remote over SSH": `macos-app-remote-over-ssh`
- SSH tunnel setup: `ssh-tunnel-setup`
- Tailscale MagicDNS: `tailscale-magicdns`
- Remote endpoint token/password/TLS fingerprint: `remote-endpoint-token-password-tls-fingerprint`
- Local node host startup: `local-node-host-startup`

#### Gateway Service Lifecycle

- Category id: `macos-gateway-host.gateway-service-lifecycle`
- Per-user Gateway LaunchAgent install: `per-user-gateway-launchagent-install`
- launchctl bootstrap: `launchctl-bootstrap`
- LaunchAgent labels: `launchagent-labels`
- Gateway token/env handling: `gateway-token-env-handling`
- App-managed LaunchAgent handoff: `app-managed-launchagent-handoff`
- openclaw update package/git handoff: `openclaw-update-package-git-handoff`
- Managed service refresh: `managed-service-refresh`
- Stale updater launchd job detection: `stale-updater-launchd-job-detection`
- openclaw uninstall: `openclaw-uninstall`
- Stranded service recovery: `stranded-service-recovery`

#### Diagnostics and Observability

- Category id: `macos-gateway-host.diagnostics-and-observability`
- LaunchAgent log paths: `launchagent-log-paths`
- openclaw gateway status --deep: `openclaw-gateway-status-deep`
- Gateway silently stops responding: `gateway-silently-stops-responding`
- Stale updater jobs: `stale-updater-jobs`

#### Permissions and Native Capabilities

- Category id: `macos-gateway-host.permissions-and-native-capabilities`
- macOS TCC permission prompts/status: `macos-tcc-permission-prompts-status`
- Native node capability exposure: `native-node-capability-exposure`
- system.run policy: `system-run-policy`
- Permission-driven support: `permission-driven-support`

#### Profiles and Isolation

- Category id: `macos-gateway-host.profiles-and-isolation`
- Profile-specific LaunchAgent labels: `profile-specific-launchagent-labels`
- Profile-specific state/config/workspace roots: `profile-specific-state-config-workspace-roots`
- Derived ports: `derived-ports`
- Rescue bot setup: `rescue-bot-setup`
- Extra Gateway process detection: `extra-gateway-process-detection`

### macOS companion app

- Surface id: `macos-companion-app`

#### Canvas

- Category id: `macos-companion-app.canvas`
- Canvas panel open/hide/navigate/eval/snapshot: `canvas-panel-open-hide-navigate-eval-snapshot`
- Local custom URL scheme: `local-custom-url-scheme`
- A2UI host auto-navigation: `a2ui-host-auto-navigation`
- Canvas enable/disable setting: `canvas-enable-disable-setting`

#### Local Setup

- Category id: `macos-companion-app.local-setup`
- Local mode Gateway attach/start/stop: `local-mode-gateway-attach-start-stop`
- LaunchAgent install/update/restart/uninstall: `launchagent-install-update-restart-uninstall`
- Existing-listener detection: `existing-listener-detection`
- Native first-run onboarding flow: `native-first-run-onboarding-flow`
- CLI discovery: `cli-discovery`
- Local workspace selection: `local-workspace-selection`
- Onboarding WebChat session separation: `onboarding-webchat-session-separation`

#### Status and Settings

- Category id: `macos-companion-app.status-and-settings`
- Menu-bar status: `menu-bar-status`
- Activity state ingestion: `activity-state-ingestion`
- Settings navigation: `settings-navigation`
- Health polling: `health-polling`
- Channels settings: `channels-settings`

#### Native Capabilities

- Category id: `macos-companion-app.native-capabilities`
- Mac node session connection: `mac-node-session-connection`
- system.run: `system-run`
- Exec approval policy: `exec-approval-policy`
- Permission requests: `permission-requests`
- TCC persistence: `tcc-persistence`

#### Remote Connections

- Category id: `macos-companion-app.remote-connections`
- Remote connection mode selection: `remote-connection-mode-selection`
- SSH tunnel: `ssh-tunnel`
- Gateway discovery: `gateway-discovery`

#### Voice and Talk

- Category id: `macos-companion-app.voice-and-talk`
- Voice Wake runtime: `voice-wake-runtime`
- Push-to-talk: `push-to-talk`
- Talk provider playback plan: `talk-provider-playback-plan`

#### WebChat

- Category id: `macos-companion-app.webchat`
- Native SwiftUI WebChat window: `native-swiftui-webchat-window`
- Gateway chat transport: `gateway-chat-transport`
- Local and remote data-plane reuse: `local-and-remote-data-plane-reuse`

#### Remote WebChat

- Category id: `macos-companion-app.remote-webchat`
- macOS WebChat transport: `macos-webchat-transport`
- SSH tunnel data plane: `ssh-tunnel-data-plane`
- Direct ws/wss remote mode: `direct-ws-wss-remote-mode`
- Session continuity: `session-continuity`
- Remote troubleshooting: `remote-troubleshooting`

### Linux Gateway host

- Surface id: `linux-gateway-host`

#### Host Setup and Updates

- Category id: `linux-gateway-host.host-setup-and-updates`
- Linux CLI install: `linux-cli-install`
- Node runtime prerequisites: `node-runtime-prerequisites`
- Package-manager policy: `package-manager-policy`
- Update path: `update-path`

#### Gateway Runtime and Service Control

- Category id: `linux-gateway-host.gateway-runtime-and-service-control`
- Foreground Gateway Runtime: `foreground-gateway-runtime`
- Process Control: `process-control`
- Systemd User Service Lifecycle setup: `systemd-user-service-lifecycle-setup`
- Systemd User Service Lifecycle operation: `systemd-user-service-lifecycle-operation`
- Systemd User Service Lifecycle status: `systemd-user-service-lifecycle-status`
- Systemd User Service Lifecycle recovery: `systemd-user-service-lifecycle-recovery`

#### Remote Access and Security

- Category id: `linux-gateway-host.remote-access-and-security`
- Remote Network Exposure: `remote-network-exposure`
- TLS: `tls`
- Tailscale: `tailscale`
- Gateway exposure safeguards: `gateway-exposure-safeguards`
- Gateway authentication modes: `gateway-authentication-modes`
- Secret Handling: `secret-handling`

#### Diagnostics and Repair

- Category id: `linux-gateway-host.diagnostics-and-repair`
- Gateway diagnostic reports: `gateway-diagnostic-reports`
- Gateway log tailing: `gateway-log-tailing`
- Doctor checks: `doctor-checks`
- Operator repair guidance: `operator-repair-guidance`

#### Deployment Targets

- Category id: `linux-gateway-host.deployment-targets`
- VPS: `vps`
- Container: `container`
- Cloud Deployment Guidance: `cloud-deployment-guidance`

### Linux companion app

- Surface id: `linux-companion-app`

#### App Distribution

- Category id: `linux-companion-app.app-distribution`
- Native app package: `native-app-package`
- Distro package targets: `distro-package-targets`
- Official release metadata: `official-release-metadata`

#### Gateway Connectivity

- Category id: `linux-companion-app.gateway-connectivity`
- Local Gateway attach and status: `local-gateway-attach-and-status`
- Gateway pairing and auth: `gateway-pairing-and-auth`
- Remote mode: `remote-mode`
- Local and remote resource boundaries: `local-and-remote-resource-boundaries`

#### Chat and Sessions

- Category id: `linux-companion-app.chat-and-sessions`
- Native Linux chat window: `native-linux-chat-window`
- Transcript: `transcript`
- Gateway chat transport: `gateway-chat-transport`

#### Desktop Capabilities

- Category id: `linux-companion-app.desktop-capabilities`
- Linux desktop permissions: `linux-desktop-permissions`
- Secret storage: `secret-storage`
- Sandbox/package posture: `sandbox-package-posture`
- Linux native node identity: `linux-native-node-identity`
- Host command execution: `host-command-execution`
- Desktop tools: `desktop-tools`
- Linux native Talk: `linux-native-talk`
- Microphone capture: `microphone-capture`
- Native media permissions: `native-media-permissions`

#### Status and Diagnostics

- Category id: `linux-companion-app.status-and-diagnostics`
- Native Linux app readiness: `native-linux-app-readiness`
- Gateway health/status display: `gateway-health-status-display`
- Log/transcript opening: `log-transcript-opening`
- Doctor/repair affordances: `doctor-repair-affordances`
- Linux tray/status item: `linux-tray-status-item`
- Runtime status row: `runtime-status-row`
- Desktop-environment integration: `desktop-environment-integration`

### Windows via WSL2

- Surface id: `windows-via-wsl2`

#### WSL Setup

- Category id: `windows-via-wsl2.wsl-setup`
- WSL2 + Ubuntu installation: `wsl2-ubuntu-installation`
- Node runtime: `node-runtime`
- Linux install flow inside WSL2: `linux-install-flow-inside-wsl2`
- WSL2 runtime boundary: `wsl2-runtime-boundary`
- WSL2 network-family requirements: `wsl2-network-family-requirements`
- Source install and build inside WSL2: `source-install-and-build-inside-wsl2`

#### CLI

- Category id: `windows-via-wsl2.cli`
- WSL2 CLI entrypoints: `wsl2-cli-entrypoints`
- openclaw onboard: `openclaw-onboard`
- openclaw doctor status and logs: `openclaw-doctor-status-and-logs`
- openclaw update: `openclaw-update`
- npm/pnpm/git package-root: `npm-pnpm-git-package-root`
- Managed systemd Gateway restart: `managed-systemd-gateway-restart`
- Service metadata refresh: `service-metadata-refresh`
- Package-manager caveats: `package-manager-caveats`

#### Gateway Service Lifecycle

- Category id: `windows-via-wsl2.gateway-service-lifecycle`
- Onboarded systemd install: `onboarded-systemd-install`
- Gateway service install: `gateway-service-install`
- systemd user unit rendering: `systemd-user-unit-rendering`
- WSL-aware systemd unavailable hints: `wsl-aware-systemd-unavailable-hints`
- Doctor service repair: `doctor-service-repair`
- WSL user-service linger: `wsl-user-service-linger`
- Systemd availability after Windows boot: `systemd-availability-after-windows-boot`
- Windows startup task for WSL: `windows-startup-task-for-wsl`
- Verification before Windows sign-in: `verification-before-windows-sign-in`
- Clear expectations around PC power: `clear-expectations-around-pc-power`

#### Gateway Access and Exposure

- Category id: `windows-via-wsl2.gateway-access-and-exposure`
- Gateway token/password auth: `gateway-token-password-auth`
- Provider credentials: `provider-credentials`
- Gateway auth SecretRefs: `gateway-auth-secretrefs`
- Remote URL credential precedence: `remote-url-credential-precedence`
- WSL virtual network: `wsl-virtual-network`
- Windows portproxy setup: `windows-portproxy-setup`
- Windows Firewall rules: `windows-firewall-rules`
- Reachable Gateway URLs: `reachable-gateway-urls`
- Loopback and LAN exposure: `loopback-and-lan-exposure`
- WSL2 IPv4 networking: `wsl2-ipv4-networking`
- Tailscale remote access: `tailscale-remote-access`

#### Diagnostics and Repair

- Category id: `windows-via-wsl2.diagnostics-and-repair`
- openclaw doctor: `runtime.codex-plugin.auth`, `runtime.codex-plugin.lifecycle`, `runtime.doctor-repair`
- openclaw status: `openclaw-status`
- openclaw logs: `openclaw-logs`
- SecretRef: `secretref`
- WSL/systemd unavailable hints: `wsl-systemd-unavailable-hints`
- Operator repair guidance after WSL2 service: `operator-repair-guidance-after-wsl2-service`

#### Browser and Control UI

- Category id: `windows-via-wsl2.browser-and-control-ui`
- WSL2 Gateway with Windows browser: `wsl2-gateway-with-windows-browser`
- Windows Control UI URL: `windows-control-ui-url`
- Raw remote CDP to Windows Chrome: `raw-remote-cdp-to-windows-chrome`
- Host-local Chrome MCP: `host-local-chrome-mcp`
- Browser profile cdpUrl: `browser-profile-cdpurl`
- Layered diagnostics: `layered-diagnostics`

### Native Windows

- Surface id: `native-windows-cli-and-gateway`

#### CLI

- Category id: `native-windows-cli-and-gateway.cli`
- PowerShell installer: `powershell-installer`
- Node and package-manager bootstrap: `node-and-package-manager-bootstrap`
- npm global install: `npm-global-install`
- Packaged CLI launcher: `packaged-cli-launcher`
- Windows command shims: `windows-command-shims`
- openclaw onboard: `openclaw-onboard`
- Local Gateway config: `local-gateway-config`
- Daemon install flags: `daemon-install-flags`
- Native-vs-WSL setup boundary: `native-vs-wsl-setup-boundary`

#### Gateway Management

- Category id: `native-windows-cli-and-gateway.gateway-management`
- openclaw gateway: `openclaw-gateway`
- Foreground runtime health/readiness: `foreground-runtime-health-readiness`
- Windows-specific restart/signal: `windows-specific-restart-signal`
- Unmanaged foreground mode: `unmanaged-foreground-mode`
- openclaw gateway install: `openclaw-gateway-install`
- Gateway launcher files: `gateway-launcher-files`
- Scheduled Task runtime status: `scheduled-task-runtime-status`
- Startup-folder fallback: `startup-folder-fallback`
- openclaw status: `openclaw-status`
- Windows service inspection: `windows-service-inspection`
- Post-install diagnostics: `post-install-diagnostics`

#### Networking

- Category id: `native-windows-cli-and-gateway.networking`
- Native Windows host networking: `native-windows-host-networking`
- netsh interface portproxy: `netsh-interface-portproxy`
- Gateway status and probe output: `gateway-status-and-probe-output`
- Loopback, LAN, and WSL boundary: `loopback-lan-and-wsl-boundary`

#### Updates

- Category id: `native-windows-cli-and-gateway.updates`
- openclaw update on native Windows package: `openclaw-update-on-native-windows-package`
- Managed Gateway stop/restart: `managed-gateway-stop-restart`
- Detached update handoff: `detached-update-handoff`
- Windows package locks: `windows-package-locks`

### Native Windows companion app

- Surface id: `native-windows-companion-app`

#### Installation and Updates

- Category id: `native-windows-companion-app.installation-and-updates`
- Official app download: `official-app-download`
- MSI/MSIX/App Installer/winget-style packaging: `msi-msix-app-installer-winget-style-packaging`
- Windows architecture handling for x64: `windows-architecture-handling-for-x64`
- App release channel: `app-release-channel`

#### Gateway Connection

- Category id: `native-windows-companion-app.gateway-connection`
- App-managed local Gateway attach/start: `app-managed-local-gateway-attach-start`
- Remote Gateway connection modes: `remote-gateway-connection-modes`
- Device/node pairing: `device-node-pairing`

#### Chat Sessions

- Category id: `native-windows-companion-app.chat-sessions`
- Native Windows chat window: `native-windows-chat-window`
- Gateway chat transport: `gateway-chat-transport`

#### Status and Repair

- Category id: `native-windows-companion-app.status-and-repair`
- App health states: `app-health-states`
- App-specific repair: `app-specific-repair`
- Windows system tray app: `windows-system-tray-app`
- Status indicators: `status-indicators`
- App-specific notification permission: `app-specific-notification-permission`

#### Desktop Tools and Permissions

- Category id: `native-windows-companion-app.desktop-tools-and-permissions`
- Windows node identity: `windows-node-identity`
- Host command execution: `host-command-execution`
- Desktop command policy: `desktop-command-policy`
- App approval prompts: `app-approval-prompts`
- Screen and media capture: `screen-and-media-capture`
- Canvas host behavior: `canvas-host-behavior`
- Windows shell integrations: `windows-shell-integrations`
- App secrets: `app-secrets`
- Windows ACL: `windows-acl`
- Command approval: `command-approval`

### Android app

- Surface id: `android-app`

#### Media Capture

- Category id: `android-app.media-capture`
- Camera and media capture: `camera-and-media-capture`

#### Mobile Chat

- Category id: `android-app.mobile-chat`
- Chat tab: `chat-tab`

#### Connection Setup

- Category id: `android-app.connection-setup`
- Gateway discovery: `gateway-discovery`

#### Distribution

- Category id: `android-app.distribution`
- Public Google Play install path: `public-google-play-install-path`
- Manual install path: `manual-install-path`
- Release smoke and startup performance: `release-smoke-and-startup-performance`

#### Settings

- Category id: `android-app.settings`
- Settings sheet: `settings-sheet`

#### Voice

- Category id: `android-app.voice`
- Voice tab: `voice-tab`

#### Device Runtime

- Category id: `android-app.device-runtime`
- Background reconnect and presence: `background-reconnect-and-presence`
- Device command availability: `device-command-availability`

### iOS app

- Surface id: `ios-app`

#### Media and Sharing

- Category id: `ios-app.media-and-sharing`
- Camera list/snap/clip: `camera-list-snap-clip`

#### Canvas and Screen

- Category id: `ios-app.canvas-and-screen`
- Canvas present/hide/navigate/eval/snapshot: `canvas-present-hide-navigate-eval-snapshot`

#### Chat and Sessions

- Category id: `ios-app.chat-and-sessions`
- Chat sessions and operator controls: `chat-sessions-and-operator-controls`

#### Gateway Setup and Diagnostics

- Category id: `ios-app.gateway-setup-and-diagnostics`
- Bonjour/local: `bonjour-local`
- Manual host/port: `manual-host-port`
- Gateway connect configuration persistence: `gateway-connect-configuration-persistence`
- TLS fingerprint trust prompt: `tls-fingerprint-trust-prompt`
- Pairing approval: `pairing-approval`
- Pairing/auth diagnostics for users: `pairing-auth-diagnostics-for-users`
- Settings tab: `settings-tab`

#### Distribution

- Category id: `ios-app.distribution`
- Internal preview status: `internal-preview-status`

#### Device Commands

- Category id: `ios-app.device-commands`
- Location modes: `location-modes`
- Device command handling: `device-command-handling`

#### Notifications and Background

- Category id: `ios-app.notifications-and-background`
- APNs registration and relay delivery: `apns-registration-and-relay-delivery`

#### Voice

- Category id: `ios-app.voice`
- Voice wake: `voice-wake`

### watchOS companion surfaces

- Surface id: `watchos-companion-surfaces`

#### Delivery and Recovery

- Category id: `watchos-companion-surfaces.delivery-and-recovery`
- APNs relay/direct registration as it affects: `apns-relay-direct-registration-as-it-affects`
- Silent push: `silent-push`
- Pending approval recovery IDs: `pending-approval-recovery-ids`
- Gateway-side iOS exec approval: `gateway-side-ios-exec-approval`
- iPhone-side WatchConnectivity transport: `iphone-side-watchconnectivity-transport`
- Watch-side receiver activation: `watch-side-receiver-activation`
- Delivery fallback among reachable messages: `delivery-fallback-among-reachable-messages`

#### Exec Approvals

- Category id: `watchos-companion-surfaces.exec-approvals`
- Watch exec approval prompt: `watch-exec-approval-prompt`
- Watch approval list/detail UI: `watch-approval-list-detail-ui`
- iPhone-side prompt caching: `iphone-side-prompt-caching`

#### Distribution and Support

- Category id: `watchos-companion-surfaces.distribution-and-support`
- Watch app: `watch-app`
- Signing/profile variables: `signing-profile-variables`
- Public/support status: `public-support-status`
- Changelog: `changelog`
- Release metadata: `release-metadata`
- Historical bug/regression themes relevant to scoring: `historical-bug-regression-themes-relevant-to-scoring`

#### Notifications and Replies

- Category id: `watchos-companion-surfaces.notifications-and-replies`
- watch.status: `watch-status`
- Payload normalization: `payload-normalization`
- Mirrored iOS notification fallback when watch: `mirrored-ios-notification-fallback-when-watch`
- Watch action buttons from generic prompt: `watch-action-buttons-from-generic-prompt`
- Watch-to-iPhone reply payloads: `watch-to-iphone-reply-payloads`
- iPhone-side dedupe: `iphone-side-dedupe`
- Mirrored iOS notification action: `mirrored-ios-notification-action`

#### Watch App UI

- Category id: `watchos-companion-surfaces.watch-app-ui`
- Watch app entry point: `watch-app-entry-point`
- Generic inbox: `generic-inbox`
- Persistent watch inbox state: `persistent-watch-inbox-state`

### Raspberry Pi / small Linux devices

- Surface id: `raspberry-pi-small-linux-devices`

#### Setup and Compatibility

- Category id: `raspberry-pi-small-linux-devices.setup-and-compatibility`
- Hardware and 64-bit OS requirements: `hardware-and-64-bit-os-requirements`
- Node runtime setup: `node-runtime-setup`
- OpenClaw install and onboarding: `openclaw-install-and-onboarding`
- First-run verification: `first-run-verification`
- Supported Pi model selection: `supported-pi-model-selection`
- 64-bit ARM boundary: `64-bit-arm-boundary`
- Unsupported device guidance: `unsupported-device-guidance`
- Slow-device caveats: `slow-device-caveats`
- npm/pnpm/Bun install modes: `npm-pnpm-bun-install-modes`
- Installer architecture detection: `installer-architecture-detection`
- Optional ARM binary checks: `optional-arm-binary-checks`
- Fallback/build guidance: `fallback-build-guidance`

#### Remote Access and Auth

- Category id: `raspberry-pi-small-linux-devices.remote-access-and-auth`
- Headless API-key auth: `headless-api-key-auth`
- Gateway shared-secret auth: `gateway-shared-secret-auth`
- Device pairing approvals: `device-pairing-approvals`
- SecretRef handling: `secretref-handling`
- Token drift recovery: `token-drift-recovery`
- SSH tunnel dashboard access: `ssh-tunnel-dashboard-access`
- Tailscale Serve/Funnel: `tailscale-serve-funnel`
- Loopback/non-loopback exposure controls: `loopback-non-loopback-exposure-controls`
- Authenticated Control UI access: `authenticated-control-ui-access`

#### Gateway Runtime

- Category id: `raspberry-pi-small-linux-devices.gateway-runtime`
- Always-on Gateway process: `always-on-gateway-process`
- Cloud model configuration: `cloud-model-configuration`
- Channel startup: `channel-startup`
- Gateway health/status: `gateway-health-status`
- User service install: `user-service-install`
- linger/boot persistence: `linger-boot-persistence`
- Service drop-ins: `service-drop-ins`
- Restart tuning: `restart-tuning`
- Status/log inspection: `status-log-inspection`
- Backup/restore: `backup-restore`

#### Performance and Diagnostics

- Category id: `raspberry-pi-small-linux-devices.performance-and-diagnostics`
- Swap and low-RAM tuning: `swap-and-low-ram-tuning`
- USB SSD guidance: `usb-ssd-guidance`
- Compile cache/no-respawn settings: `compile-cache-no-respawn-settings`
- OOM/performance troubleshooting: `oom-performance-troubleshooting`
- Diagnostics bundles: `diagnostics-bundles`

### Docker / Podman hosting

- Surface id: `docker-podman-hosting`

#### Container Setup

- Category id: `docker-podman-hosting.container-setup`
- Local Image Setup Script: `local-image-setup-script`
- Docker Compose gateway: `docker-compose-gateway`
- First-run onboarding: `first-run-onboarding`
- Docker-only first-run notes: `docker-only-first-run-notes`
- Podman setup scripts and Quadlet template: `podman-setup-scripts-and-quadlet-template`
- Rootless Podman image setup: `rootless-podman-image-setup`

#### Container Operations

- Category id: `docker-podman-hosting.container-operations`
- Host CLI routing into running Docker/Podman: `host-cli-routing-into-running-docker-podman`
- Container Targeting: `container-targeting`
- Container update/rebuild/restart guidance for Docker: `container-update-rebuild-restart-guidance-for-docker`
- Docker Compose: `docker-compose`
- Gateway token generation: `gateway-token-generation`
- Ownership: `ownership`
- Docker Compose: `docker-compose-2`
- Container health endpoints: `container-health-endpoints`
- Provider/VPS Docker hosting docs: `provider-vps-docker-hosting-docs`
- Docker VM persistence/update guidance: `docker-vm-persistence-update-guidance`
- Operator-facing update: `operator-facing-update`

#### Image Release and Validation

- Category id: `docker-podman-hosting.image-release-and-validation`
- Root Dockerfile build stages: `root-dockerfile-build-stages`
- Docker release workflow: `docker-release-workflow`
- Docker E2E package artifact generation: `docker-e2e-package-artifact-generation`
- Docker E2E plan/scheduler scripts: `docker.e2e`, `harness.qa-lab`, `telemetry.prometheus`
- Release-path install: `release-path-install`

#### Agent Sandbox and Tooling

- Category id: `docker-podman-hosting.agent-sandbox-and-tooling`
- Docker gateway setup: `docker-gateway-setup`
- Docker-backed agent sandbox support: `docker-backed-agent-sandbox-support`
- Container image dependency baking: `container-image-dependency-baking`

### Kubernetes hosting

- Surface id: `kubernetes-hosting`

#### Deployment Setup

- Category id: `kubernetes-hosting.deployment-setup`
- Kustomize packaging: `kustomize-packaging`
- Cluster prerequisites: `cluster-prerequisites`
- Quick deploy: `quick-deploy`
- Manifest apply: `manifest-apply`
- Kind validation: `kind-validation`

#### Configuration and Secrets

- Category id: `kubernetes-hosting.configuration-and-secrets`
- Agent instructions: `agent-instructions`
- Gateway config: `gateway-config`
- Provider secrets: `provider-secrets`
- Secret rotation: `secret-rotation`
- Image and namespace: `image-and-namespace`

#### Access and Exposure

- Category id: `kubernetes-hosting.access-and-exposure`
- Port-forward access: `port-forward-access`
- Service endpoint: `service-endpoint`
- Ingress exposure: `ingress-exposure`
- Auth and TLS: `auth-and-tls`
- Localhost posture: `localhost-posture`

#### Cluster Lifecycle

- Category id: `kubernetes-hosting.cluster-lifecycle`
- Resource layout: `resource-layout`
- State persistence: `state-persistence`
- Redeploy: `redeploy`
- Teardown: `teardown`
- Security context: `security-context`

### Nix install path

- Surface id: `nix-install-path`

#### Install Handoff

- Category id: `nix-install-path.install-handoff`
- Nix install overview: `nix-install-overview`
- nix-openclaw source-of-truth: `nix-openclaw-source-of-truth`
- Install discoverability: `install-discoverability`
- Verification handoff: `verification-handoff`

#### Plugin Lifecycle

- Category id: `nix-install-path.plugin-lifecycle`
- Lifecycle command refusal: `lifecycle-command-refusal`
- Declarative plugin selection: `declarative-plugin-selection`
- Nix-store plugin loading: `nix-store-plugin-loading`
- Hardlink safety: `hardlink-safety`

#### Activation and App UX

- Category id: `nix-install-path.activation-and-app-ux`
- Environment activation: `environment-activation`
- macOS defaults activation: `macos-defaults-activation`
- Runtime Nix-mode detection: `runtime-nix-mode-detection`
- Stable Nix defaults: `stable-nix-defaults`
- Managed-by-Nix banner: `managed-by-nix-banner`
- Read-only config controls: `read-only-config-controls`
- Onboarding skip: `onboarding-skip`

#### Config and State

- Category id: `nix-install-path.config-and-state`
- Immutable config guard: `immutable-config-guard`
- Config writer refusal: `config-writer-refusal`
- Agent-first Nix edits: `agent-first-nix-edits`
- Explicit config path: `explicit-config-path`
- Writable state directory: `writable-state-directory`
- Immutable-store config support: `immutable-store-config-support`
- State integrity checks: `state-integrity-checks`

#### Service Runtime and Guards

- Category id: `nix-install-path.service-runtime-and-guards`
- Nix profile PATH discovery: `nix-profile-path-discovery`
- Profile precedence: `profile-precedence`
- Service PATH fallback: `service-path-fallback`
- Trusted binary boundaries: `trusted-binary-boundaries`
- Setup write refusal: `setup-write-refusal`
- Doctor repair refusal: `doctor-repair-refusal`
- Update handoff: `update-handoff`
- Service lifecycle handoff: `service-lifecycle-handoff`

## Channel

### Discord

- Surface id: `discord`

#### Channel Setup and Operations

- Category id: `discord.channel-setup-and-operations`
- Application and bot setup: `application-and-bot-setup`
- Token and application ID configuration: `token-and-application-id-configuration`
- Setup wizard and account inspection: `setup-wizard-and-account-inspection`
- Status, doctor, and intent checks: `status-doctor-and-intent-checks`
- Multi-account bot configuration: `multi-account-bot-configuration`
- Account monitor startup: `account-monitor-startup`
- Gateway WebSocket lifecycle: `gateway-websocket-lifecycle`
- Reconnect and heartbeat handling: `reconnect-and-heartbeat-handling`
- Rate limits and gateway metadata: `rate-limits-and-gateway-metadata`
- Status, probe, and health-monitor recovery: `status-probe-and-health-monitor-recovery`

#### Access and Identity

- Category id: `discord.access-and-identity`
- DM policy modes: `dm-policy-modes`
- Allowlist inheritance: `allowlist-inheritance`
- Pairing-code approval: `pairing-code-approval`
- Sender authorization: `sender-authorization`
- Access-group authorization: `access-group-authorization`
- Group DM authorization: `group-dm-authorization`

#### Conversation Routing and Delivery

- Category id: `discord.conversation-routing-and-delivery`
- Guild and channel admission: `guild-and-channel-admission`
- Mention gating: `mention-gating`
- Session key isolation: `session-key-isolation`
- Configured and runtime routing: `configured-and-runtime-routing`
- Inbound context visibility: `inbound-context-visibility`
- Forum and media-channel thread posts: `forum-and-media-channel-thread-posts`
- Thread actions: `thread-actions`
- Target parsing: `target-parsing`
- Thread context resolution: `thread-context-resolution`
- Thread-bound session routing: `thread-bound-session-routing`
- ACP agent routing: `acp-agent-routing`
- Routing lifecycle: `routing-lifecycle`

#### Media and Rich Content

- Category id: `discord.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

#### Native Controls and Approvals

- Category id: `discord.native-controls-and-approvals`
- Native slash command registration: `native-slash-command-registration`
- Native slash command execution: `native-slash-command-execution`
- Model Picker Commands: `model-picker-commands`
- Components v2 messages: `components-v2-messages`
- Callback TTL: `callback-ttl`

#### Realtime Voice and Calls

- Category id: `discord.realtime-voice-and-calls`
- Voice Channel Lifecycle: `voice-channel-lifecycle`
- Auto-join and follow-users: `auto-join-and-follow-users`
- Realtime voice modes: `realtime-voice-modes`
- Wake, barge-in, and echo handling: `wake-barge-in-and-echo-handling`
- Voice codec and DAVE recovery: `voice-codec-and-dave-recovery`

### Telegram

- Surface id: `telegram`

#### Channel Setup and Operations

- Category id: `telegram.channel-setup-and-operations`
- BotFather token creation: `botfather-token-creation`
- TELEGRAM_BOT_TOKEN: `telegram-bot-token`
- Setup wizard credential capture: `setup-wizard-credential-capture`
- Startup getMe: `startup-getme`
- Doctor/status surfacing: `doctor-status-surfacing`
- Named account configuration: `named-account-configuration`
- CLI/message-tool targets: `cli-message-tool-targets`
- Directory adapters: `directory-adapters`
- Channel status: `channel-status`
- Account-scoped outbound: `account-scoped-outbound`

#### Access and Identity

- Category id: `telegram.access-and-identity`
- dmPolicy modes: `dmpolicy-modes`
- Pairing-code approval: `pairing-code-approval`
- Numeric Telegram user ID normalization with telegram: `numeric-telegram-user-id-normalization-with-telegram`
- allowFrom: `allowfrom`
- Unauthorized DM: `unauthorized-dm`
- Group allowlists: `group-allowlists`
- Supergroup negative chat IDs: `supergroup-negative-chat-ids`
- Forum topic session keys: `forum-topic-session-keys`
- ACP topic routing: `acp-topic-routing`
- Session key construction: `session-key-construction`

#### Conversation Routing and Delivery

- Category id: `telegram.conversation-routing-and-delivery`
- Conversation Routing and Delivery: `conversation-routing-and-delivery`

#### Media and Rich Content

- Category id: `telegram.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

#### Native Controls and Approvals

- Category id: `telegram.native-controls-and-approvals`
- Inline keyboard rendering: `inline-keyboard-rendering`
- Exec approvals in DMs: `exec-approvals-in-dms`
- Message actions: `message-actions`
- Action capability discovery: `action-capability-discovery`
- Native setMyCommands startup sync: `native-setmycommands-startup-sync`
- Command name/description normalization: `command-name-description-normalization`
- Built-in commands: `built-in-commands`
- Command authorization in DMs: `command-authorization-in-dms`
- Model buttons: `model-buttons`

### WhatsApp

- Surface id: `whatsapp`

#### Channel Setup and Operations

- Category id: `whatsapp.channel-setup-and-operations`
- Official @openclaw/whatsapp plugin metadata: `official-openclaw-whatsapp-plugin-metadata`
- openclaw plugin install whatsapp: `openclaw-plugin-install-whatsapp`
- Channel config schema: `channel-config-schema`
- Baileys socket lifecycle: `baileys-socket-lifecycle`
- Operator troubleshooting: `operator-troubleshooting`

#### Access and Identity

- Category id: `whatsapp.access-and-identity`
- QR login: `qr-login`
- Baileys multi-file auth persistence: `baileys-multi-file-auth-persistence`
- DM pairing challenge: `dm-pairing-challenge`
- Multi-account/default-account resolution: `multi-account-default-account-resolution`
- Direct-message dmPolicy: `direct-message-dmpolicy`
- Sender identity extraction: `sender-identity-extraction`
- Privacy controls for plugin hooks: `privacy-controls-for-plugin-hooks`

#### Conversation Routing and Delivery

- Category id: `whatsapp.conversation-routing-and-delivery`
- Group allowlists: `group-allowlists`
- Group session keys: `group-session-keys`
- Outbound text sends: `outbound-text-sends`
- Provider-accepted receipts: `provider-accepted-receipts`

#### Media and Rich Content

- Category id: `whatsapp.media-and-rich-content`
- Inbound media download: `inbound-media-download`
- Outbound image: `outbound-image`

#### Native Controls and Approvals

- Category id: `whatsapp.native-controls-and-approvals`
- Native exec: `native-exec`
- Approver target resolution: `approver-target-resolution`

### Slack

- Surface id: `slack`

#### Channel Setup and Operations

- Category id: `slack.channel-setup-and-operations`
- App Install: `app-install`
- Slack app credentials: `slack-app-credentials`
- Manifest: `manifest`
- Scopes: `scopes`
- Channel status diagnostics: `channel-status-diagnostics`
- Slack account status: `slack-account-status`
- Operator Repair: `operator-repair`
- Socket: `socket`
- HTTP transport: `http-transport`
- Runtime Lifecycle: `runtime-lifecycle`

#### Access and Identity

- Category id: `slack.access-and-identity`
- Access and Identity: `access-and-identity`

#### Conversation Routing and Delivery

- Category id: `slack.conversation-routing-and-delivery`
- Channel allowlists: `channel-allowlists`
- Thread routing: `thread-routing`
- Session Isolation: `session-isolation`
- DM Pairing: `dm-pairing`
- Sender Authorization: `sender-authorization`

#### Media and Rich Content

- Category id: `slack.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

#### Native Controls and Approvals

- Category id: `slack.native-controls-and-approvals`
- Slash Commands: `slash-commands`
- Native Command Routing: `native-command-routing`
- Interactive Replies: `interactive-replies`
- App Home: `app-home`
- Assistant Events: `assistant-events`
- Native Approvals: `native-approvals`
- Actions: `actions`
- Security-sensitive Ops: `security-sensitive-ops`

### iMessage / BlueBubbles

- Surface id: `imessage-bluebubbles`

#### Channel Setup and Operations

- Category id: `imessage-bluebubbles.channel-setup-and-operations`
- Translate legacy config: `translate-legacy-config`
- Cut over safely: `cut-over-safely`
- Handle migration caveats: `handle-migration-caveats`
- Run local imsg: `run-local-imsg`
- Run through SSH wrapper: `run-through-ssh-wrapper`
- Grant macOS permissions: `grant-macos-permissions`
- Probe runtime health: `probe-runtime-health`
- Account setup prompts: `account-setup-prompts`
- Account status checks: `account-status-checks`
- Doctor repair checks: `doctor-repair-checks`
- Account Config: `account-config`

#### Access and Identity

- Category id: `imessage-bluebubbles.access-and-identity`
- Authorize direct senders: `authorize-direct-senders`
- Route direct conversations: `route-direct-conversations`
- Bind ACP sessions: `bind-acp-sessions`
- Group Policy: `group-policy`
- Mentions: `mentions`
- System Prompts: `system-prompts`

#### Conversation Routing and Delivery

- Category id: `imessage-bluebubbles.conversation-routing-and-delivery`
- Watch live messages: `watch-live-messages`
- Coalesce split-send DMs: `coalesce-split-send-dms`
- Replay missed messages: `replay-missed-messages`
- Seed conversation history: `seed-conversation-history`

#### Media and Rich Content

- Category id: `imessage-bluebubbles.media-and-rich-content`
- Media: `media`
- Attachments: `attachments`
- Remote Fetch: `remote-fetch`
- Chunking: `chunking`
- Native Actions: `native-actions`
- Private API: `private-api`
- Message Tool: `message-tool`

#### Native Controls and Approvals

- Category id: `imessage-bluebubbles.native-controls-and-approvals`
- Native Approvals: `native-approvals`
- Reactions: `reactions`
- Operator Control: `operator-control`

### Signal

- Surface id: `signal`

#### Channel Setup and Operations

- Category id: `signal.channel-setup-and-operations`
- QR link setup: `qr-link-setup`
- SMS registration: `sms-registration`
- Installer and binary setup: `installer-and-binary-setup`
- Container account provisioning: `container-account-provisioning`
- Status probes: `status-probes`
- Setup diagnostics: `setup-diagnostics`
- Account safety guardrails: `account-safety-guardrails`

#### Access and Identity

- Category id: `signal.access-and-identity`
- DM pairing: `dm-pairing`
- DM allowlists: `dm-allowlists`
- Sender identity normalization: `sender-identity-normalization`
- Group allowlists: `group-allowlists`
- Mention gates: `mention-gates`
- Pending group history: `pending-group-history`

#### Conversation Routing and Delivery

- Category id: `signal.conversation-routing-and-delivery`
- Conversation Routing and Delivery: `conversation-routing-and-delivery`

#### Media and Rich Content

- Category id: `signal.media-and-rich-content`
- Text delivery targets: `text-delivery-targets`
- Media delivery and limits: `media-delivery-and-limits`
- Typing and read receipts: `typing-and-read-receipts`
- Styled/chunked output: `styled-chunked-output`
- Reaction action discovery: `reaction-action-discovery`
- Add/remove reactions: `add-remove-reactions`
- Group reaction targeting: `group-reaction-targeting`

#### Native Controls and Approvals

- Category id: `signal.native-controls-and-approvals`
- Native approval routing: `native-approval-routing`
- Reaction approval responses: `reaction-approval-responses`
- Approver targeting: `approver-targeting`

### Google Chat

- Surface id: `google-chat`

#### Channel Setup and Operations

- Category id: `google-chat.channel-setup-and-operations`
- Google Cloud project setup: `google-cloud-project-setup`
- Chat app configuration: `chat-app-configuration`
- Service account setup: `service-account-setup`
- Webhook audience and path: `webhook-audience-and-path`
- Workspace visibility and app status: `workspace-visibility-and-app-status`
- Guided channel setup: `guided-channel-setup`
- Account resolution: `account-resolution`
- Service account SecretRefs: `service-account-secretrefs`
- Env file and inline credentials: `env-file-and-inline-credentials`
- Channel status and probes: `channel-status-and-probes`
- Directory and mutable-id diagnostics: `directory-and-mutable-id-diagnostics`
- NPM and ClawHub install: `npm-and-clawhub-install`
- Plugin docs and catalog routing: `plugin-docs-and-catalog-routing`
- Channel aliases and labels: `channel-aliases-and-labels`
- Operator status UI: `operator-status-ui`
- Install/update metadata: `install-update-metadata`

#### Access and Identity

- Category id: `google-chat.access-and-identity`
- DM pairing approval: `dm-pairing-approval`
- Sender allowlists: `sender-allowlists`
- Google Chat identity matching: `google-chat-identity-matching`
- Direct session routing: `direct-session-routing`
- Pairing diagnostics: `pairing-diagnostics`
- Space allowlists: `space-allowlists`
- Mention gating: `mention-gating`
- Sender access groups: `sender-access-groups`
- Group session isolation: `group-session-isolation`
- Bot-loop protection: `bot-loop-protection`
- Space diagnostics: `space-diagnostics`

#### Conversation Routing and Delivery

- Category id: `google-chat.conversation-routing-and-delivery`
- Conversation Routing and Delivery: `conversation-routing-and-delivery`

#### Media and Rich Content

- Category id: `google-chat.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

#### Native Controls and Approvals

- Category id: `google-chat.native-controls-and-approvals`
- Inbound attachments: `inbound-attachments`
- Outbound media replies: `outbound-media-replies`
- Message upload action: `message-upload-action`
- Media source and size controls: `media-source-and-size-controls`
- Media receipts and thread placement: `media-receipts-and-thread-placement`
- Text send action: `text-send-action`
- Upload-file action: `upload-file-action`
- Reaction actions: `reaction-actions`
- Action capability gates: `action-capability-gates`
- Approval sender matching: `approval-sender-matching`
- Thread-aware replies: `thread-aware-replies`
- Streaming and chunked replies: `streaming-and-chunked-replies`
- Typing placeholder lifecycle: `typing-placeholder-lifecycle`
- Message-tool current-source replies: `message-tool-current-source-replies`
- NO_REPLY cleanup: `no-reply-cleanup`
- Markdown/text rendering: `markdown-text-rendering`

### Matrix

- Surface id: `matrix`

#### Channel Setup and Operations

- Category id: `matrix.channel-setup-and-operations`
- Matrix plugin identity: `matrix-plugin-identity`
- Setup wizard: `setup-wizard`
- Account discovery: `account-discovery`
- Matrix doctor warnings: `matrix-doctor-warnings`
- Matrix probe/status: `matrix-probe-status`

#### Access and Identity

- Category id: `matrix.access-and-identity`
- DM policy: `dm-policy`
- Direct-room classification: `direct-room-classification`
- Inbound route selection across sender-bound DMs: `inbound-route-selection-across-sender-bound-dms`
- Mention gates: `mention-gates`
- Matrix thread reply routing: `matrix-thread-reply-routing`
- Persisted Matrix thread routing managers: `persisted-matrix-thread-routing-managers`
- ACP/subagent spawn hooks: `acp-subagent-spawn-hooks`

#### Conversation Routing and Delivery

- Category id: `matrix.conversation-routing-and-delivery`
- Conversation Routing and Delivery: `conversation-routing-and-delivery`

#### Media and Rich Content

- Category id: `matrix.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

#### Native Controls and Approvals

- Category id: `matrix.native-controls-and-approvals`
- Channel action discovery: `channel-action-discovery`
- Message send/read/edit/delete: `message-send-read-edit-delete`
- Profile media loading: `profile-media-loading`
- Outbound Matrix text: `outbound-matrix-text`
- Message presentation metadata: `message-presentation-metadata`
- Inbound media failure handling: `inbound-media-failure-handling`

#### Encryption and Verification

- Category id: `matrix.encryption-and-verification`
- Encryption setup: `encryption-setup`
- Encrypted media upload/download: `encrypted-media-upload-download`
- Legacy state: `legacy-state`

### Microsoft Teams

- Surface id: `microsoft-teams`

#### Channel Setup and Operations

- Category id: `microsoft-teams.channel-setup-and-operations`
- Teams CLI app creation: `teams-cli-app-creation`
- Bot registration and manifest upload: `bot-registration-and-manifest-upload`
- Credential configuration: `credential-configuration`
- Teams app install verification: `teams-app-install-verification`
- Setup status: `setup-status`
- Probe and scope reporting: `probe-and-scope-reporting`
- Teams app doctor: `teams-app-doctor`
- Webhook and health diagnostics: `webhook-and-health-diagnostics`
- Operator repair paths: `operator-repair-paths`

#### Access and Identity

- Category id: `microsoft-teams.access-and-identity`
- DM pairing: `dm-pairing`
- Stable sender identity: `stable-sender-identity`
- Allowlists and access groups: `allowlists-and-access-groups`
- Invoke and command authorization: `invoke-and-command-authorization`
- Teams-originated config writes: `teams-originated-config-writes`
- Bot Framework SSO invokes: `bot-framework-sso-invokes`
- Delegated token storage: `delegated-token-storage`
- Graph directory lookup: `graph-directory-lookup`
- Member profile lookup: `member-profile-lookup`

#### Conversation Routing and Delivery

- Category id: `microsoft-teams.conversation-routing-and-delivery`
- Team and channel allowlists: `team-and-channel-allowlists`
- Deterministic channel replies: `deterministic-channel-replies`
- Mention-gated group access: `mention-gated-group-access`
- Session routing: `session-routing`
- Reply and thread context: `reply-and-thread-context`

#### Media and Rich Content

- Category id: `microsoft-teams.media-and-rich-content`
- Inbound attachments: `inbound-attachments`
- Graph-hosted media: `graph-hosted-media`
- File consent: `file-consent`
- SharePoint and OneDrive sharing: `sharepoint-and-onedrive-sharing`
- Media fetch safety: `media-fetch-safety`

#### Native Controls and Approvals

- Category id: `microsoft-teams.native-controls-and-approvals`
- Message action discovery: `message-action-discovery`
- Polls and reactions: `polls-and-reactions`
- Read, edit, delete, and pin: `read-edit-delete-and-pin`
- Native approval cards: `native-approval-cards`
- Feedback and group actions: `feedback-and-group-actions`

### Mattermost, LINE, IRC, Nextcloud Talk, Nostr, Twitch, Tlon, Synology Chat

- Surface id: `mattermost-line-irc-nextcloud-talk-nostr-twitch-tlon-synology-chat`

#### Channel Setup and Operations

- Category id: `mattermost-line-irc-nextcloud-talk-nostr-twitch-tlon-synology-chat.channel-setup-and-operations`
- Channel Setup and Operations: `channel-setup-and-operations`

#### Access and Identity

- Category id: `mattermost-line-irc-nextcloud-talk-nostr-twitch-tlon-synology-chat.access-and-identity`
- Access and Identity: `access-and-identity`

#### Conversation Routing and Delivery

- Category id: `mattermost-line-irc-nextcloud-talk-nostr-twitch-tlon-synology-chat.conversation-routing-and-delivery`
- Conversation Routing and Delivery: `conversation-routing-and-delivery`

#### Media and Rich Content

- Category id: `mattermost-line-irc-nextcloud-talk-nostr-twitch-tlon-synology-chat.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

### Feishu, QQ Bot, WeChat, Yuanbao, Zalo, Zalo Personal, regional channels

- Surface id: `feishu-qq-bot-wechat-yuanbao-zalo-zalo-personal-regional-channels`

#### Channel Setup and Operations

- Category id: `feishu-qq-bot-wechat-yuanbao-zalo-zalo-personal-regional-channels.channel-setup-and-operations`
- Docs channel index: `docs-channel-index`
- Official external channel catalog entries: `official-external-channel-catalog-entries`
- Core channel-plugin catalog: `core-channel-plugin-catalog`
- Channel setup wizard: `channel-setup-wizard`
- Missing-plugin: `missing-plugin`
- Cross-channel ingress/access/refactor concerns: `cross-channel-ingress-access-refactor-concerns`

#### Access and Identity

- Category id: `feishu-qq-bot-wechat-yuanbao-zalo-zalo-personal-regional-channels.access-and-identity`
- Access and Identity: `access-and-identity`

#### Conversation Routing and Delivery

- Category id: `feishu-qq-bot-wechat-yuanbao-zalo-zalo-personal-regional-channels.conversation-routing-and-delivery`
- Conversation Routing and Delivery: `conversation-routing-and-delivery`

#### Media and Rich Content

- Category id: `feishu-qq-bot-wechat-yuanbao-zalo-zalo-personal-regional-channels.media-and-rich-content`
- Media and Rich Content: `media-and-rich-content`

### Voice Call channel

- Surface id: `voice-call-channel`

#### Channel Setup and Operations

- Category id: `voice-call-channel.channel-setup-and-operations`
- Voice Call Channel: `voice-call-channel`
- Voice Call Channel: `voice-call-channel-2`

#### Access and Identity

- Category id: `voice-call-channel.access-and-identity`
- Voice Call Channel: `voice-call-channel`

#### Conversation Routing and Delivery

- Category id: `voice-call-channel.conversation-routing-and-delivery`
- Voice Call Channel: `voice-call-channel`

#### Media and Rich Content

- Category id: `voice-call-channel.media-and-rich-content`
- Voice Call Channel: `voice-call-channel`
- Voice Call Channel: `voice-call-channel-2`

#### Realtime Voice and Calls

- Category id: `voice-call-channel.realtime-voice-and-calls`
- Voice Call Channel: `voice-call-channel`
- Voice Call Channel: `voice-call-channel-2`

## Provider and tool

### OpenAI / Codex provider path

- Surface id: `openai-codex-provider-path`

#### Model and Auth

- Category id: `openai-codex-provider-path.model-and-auth`
- Canonical OpenAI Model Routing: `models.openai`, `tools.web-search`
- Catalog: `catalog`
- Codex OAuth Profiles: `auth-profiles.provider-selection`, `runtime.codex-plugin.auth`, `runtime.doctor-repair`
- Subscription Usage: `subscription-usage`
- Doctor Diagnostics: `runtime.codex-plugin.version`
- Operator Repair: `operator-repair`

#### Responses and Tool Compatibility

- Category id: `openai-codex-provider-path.responses-and-tool-compatibility`
- Codex Responses Transport: `codex-responses-transport`
- Payload Compatibility: `runtime.codex-native-workspace.read`, `runtime.prompt-compatibility`, `tools.fs.read`
- Tool Context: `runtime.codex-native-workspace.read`, `runtime.prompt-compatibility`, `tools.fs.read`
- Capability Compatibility: `capability-compatibility`

#### Native Codex Harness

- Category id: `openai-codex-provider-path.native-codex-harness`
- Native Codex App-server Harness: `models.codex-cli`, `runtime.codex-app-server`, `runtime.gateway-log-sentinel.codex-progress`, `runtime.long-context`, `runtime.no-meta-leak`, `workspace.planning`
- Thread Lifecycle: `runtime.codex-app-server`, `runtime.codex-plugin.lifecycle`, `runtime.doctor-repair`, `runtime.gateway-log-sentinel.codex-progress`, `runtime.long-context`, `runtime.turn-ordering`

#### Image and Multimodal Input

- Category id: `openai-codex-provider-path.image-and-multimodal-input`
- Image Generation Editing: `image-generation-editing`
- Multimodal Input: `multimodal-input`

#### Voice and Realtime Audio

- Category id: `openai-codex-provider-path.voice-and-realtime-audio`
- Realtime Voice Transcription: `realtime-voice-transcription`
- Speech: `speech`

### Anthropic provider path

- Surface id: `anthropic-provider-path`

#### Provider Auth and Recovery

- Category id: `anthropic-provider-path.provider-auth-and-recovery`
- API-key onboarding: `api-key-onboarding`
- Claude CLI credential reuse: `claude-cli-credential-reuse`
- Setup-token auth: `setup-token-auth`
- Auth profile health: `auth-profile-health`
- Model status: `model-status`
- Usage windows: `usage-windows`
- Cooldown/profile reporting: `cooldown-profile-reporting`
- Long-context recovery: `long-context-recovery`
- Fallback guidance: `fallback-guidance`

#### Model and Runtime Selection

- Category id: `anthropic-provider-path.model-and-runtime-selection`
- Bundled Claude catalog: `bundled-claude-catalog`
- Canonical anthropic refs: `models.anthropic`, `models.provider-auth`
- Claude CLI compatibility: `models.claude-cli`, `models.provider-capabilities`
- Model picker availability: `model-picker-availability`
- Capability metadata: `capability-metadata`
- Runtime selection: `runtime-selection`
- Session continuity: `session-continuity`
- MCP/tool bridge: `mcp-tool-bridge`
- Permission-mode mapping: `permission-mode-mapping`
- Fallback prelude: `fallback-prelude`

#### Request Transport and Turn Semantics

- Category id: `anthropic-provider-path.request-transport-and-turn-semantics`
- API-key/OAuth transport: `api-key-oauth-transport`
- Messages payloads: `messages-payloads`
- Streaming decode: `streaming-decode`
- Usage and stop reasons: `usage-and-stop-reasons`
- Abort/error handling: `abort-error-handling`
- Tool-use blocks: `tool-use-blocks`
- Tool-result replay: `tool-result-replay`
- Partial JSON recovery: `partial-json-recovery`
- Native thinking: `native-thinking`
- Signed/redacted thinking replay: `signed-redacted-thinking-replay`

#### Prompt Cache and Context

- Category id: `anthropic-provider-path.prompt-cache-and-context`
- Cache retention: `cache-retention`
- System-prompt cache boundary: `system-prompt-cache-boundary`
- 1M context: `1m-context`
- Fast mode/service tier: `fast-mode-service-tier`
- Cache diagnostics: `cache-diagnostics`

#### Media Inputs

- Category id: `anthropic-provider-path.media-inputs`
- Image input: `image-input`
- PDF document input: `pdf-document-input`
- Media model fallback: `media-model-fallback`
- Image tool results: `image-tool-results`

### Google provider path

- Surface id: `google-provider-path`

#### Provider Setup and Credentials

- Category id: `google-provider-path.provider-setup-and-credentials`
- API key onboarding: `api-key-onboarding`
- Auth choice metadata: `auth-choice-metadata`
- Gemini CLI OAuth setup: `gemini-cli-oauth-setup`
- Vertex ADC setup: `vertex-adc-setup`
- Daemon and fallback credentials: `daemon-and-fallback-credentials`
- CLI runtime selection: `cli-runtime-selection`
- OAuth login and refresh: `oauth-login-and-refresh`
- Canonical Google model refs: `canonical-google-model-refs`
- CLI usage normalization: `cli-usage-normalization`
- OAuth diagnostics: `oauth-diagnostics`

#### Model Routing and Endpoints

- Category id: `google-provider-path.model-routing-and-endpoints`
- Catalog rows and aliases: `catalog-rows-and-aliases`
- Dynamic model resolution: `dynamic-model-resolution`
- Provider routing: `provider-routing`
- Google-native config normalization: `google-native-config-normalization`
- Model picker availability: `model-picker-availability`
- Vertex provider selection: `vertex-provider-selection`
- ADC/service-account auth: `adc-service-account-auth`
- Project/location endpoints: `project-location-endpoints`
- Custom base URL policy: `custom-base-url-policy`
- Compatibility boundaries: `compatibility-boundaries`

#### Direct Gemini Runtime

- Category id: `google-provider-path.direct-gemini-runtime`
- Direct Gemini chat: `direct-gemini-chat`
- Multimodal inputs: `multimodal-inputs`
- Tool-call streaming: `tool-call-streaming`
- Usage and stop reasons: `usage-and-stop-reasons`
- Thought-signature replay: `thought-signature-replay`
- Thinking-level mapping: `thinking-level-mapping`
- Thought-signature replay: `thought-signature-replay-2`
- Tool turn ordering: `tool-turn-ordering`
- Incomplete-turn recovery: `incomplete-turn-recovery`
- Planning-only turn recovery: `planning-only-turn-recovery`

#### Media, Search, and Realtime

- Category id: `google-provider-path.media-search-and-realtime`
- Bundled plugin distribution: `bundled-plugin-distribution`
- Provider auto-enable metadata: `provider-auto-enable-metadata`
- Image and media adapters: `image-and-media-adapters`
- Speech and realtime adapters: `speech-and-realtime-adapters`
- Search and generation tools: `search-and-generation-tools`
- Realtime voice sessions: `realtime-voice-sessions`
- Constrained browser tokens: `constrained-browser-tokens`
- Audio and transcript events: `audio-and-transcript-events`
- Live tool calls: `live-tool-calls`
- Session reconnects: `session-reconnects`

#### Prompt Caching

- Category id: `google-provider-path.prompt-caching`
- Cache retention config: `cache-retention-config`
- Managed cachedContents: `managed-cachedcontents`
- Manual cachedContent handles: `manual-cachedcontent-handles`
- Cache usage accounting: `cache-usage-accounting`
- Cache diagnostics and live proof: `cache-diagnostics-and-live-proof`

### OpenRouter provider path

- Surface id: `openrouter-provider-path`

#### Provider Setup and Auth

- Category id: `openrouter-provider-path.provider-setup-and-auth`
- First-run setup: `first-run-setup`
- Default model selection: `default-model-selection`
- Provider plugin registration: `provider-plugin-registration`
- Model-ref examples: `model-ref-examples`
- OPENROUTER_API_KEY: `openrouter-api-key`
- Auth profiles and auth order: `auth-profiles-and-auth-order`
- Status/probe and removal: `status-probe-and-removal`
- Provider-entry SecretRef/API-key resolution: `provider-entry-secretref-api-key-resolution`
- Gateway env inheritance: `gateway-env-inheritance`
- Static catalog rows: `static-catalog-rows`
- Dynamic /models discovery: `dynamic-models-discovery`
- openrouter/auto and nested refs: `openrouter-auto-and-nested-refs`
- Free-model scan/probe: `free-model-scan-probe`
- Model list/picker cache: `model-list-picker-cache`

#### Chat Runtime and Normalization

- Category id: `openrouter-provider-path.chat-runtime-and-normalization`
- Chat completions route: `chat-completions-route`
- Provider routing params: `provider-routing-params`
- Per-model route overrides: `per-model-route-overrides`
- Reasoning payload policy: `reasoning-payload-policy`
- Anthropic/Gemini/DeepSeek variants: `anthropic-gemini-deepseek-variants`
- Streamed content parsing: `streamed-content-parsing`
- reasoning_details visible output: `reasoning-details-visible-output`
- Tool-call delta preservation: `tool-call-delta-preservation`
- Family-specific replay policy: `family-specific-replay-policy`
- Response-model and usage normalization: `response-model-and-usage-normalization`
- Attribution headers: `attribution-headers`
- Response-cache headers/TTL/clear: `response-cache-headers-ttl-clear`
- Anthropic cache-control markers: `anthropic-cache-control-markers`
- Cache usage mapping: `cache-usage-mapping`
- Custom proxy exclusions: `custom-proxy-exclusions`

#### Provider Recovery and Diagnostics

- Category id: `openrouter-provider-path.provider-recovery-and-diagnostics`
- Timeout/retry classification: `timeout-retry-classification`
- Auth/billing/key-limit classification: `auth-billing-key-limit-classification`
- Context overflow: `context-overflow`
- Model fallback notices: `model-fallback-notices`
- Guarded fetch/pricing warnings: `guarded-fetch-pricing-warnings`

#### Media Generation and Speech

- Category id: `openrouter-provider-path.media-generation-and-speech`
- image_generate OpenRouter route: `image-generate-openrouter-route`
- video_generate async jobs/polling/download: `video-generate-async-jobs-polling-download`
- music_generate audio route: `music-generate-audio-route`
- Text-to-speech: `text-to-speech`
- Speech-to-text transcription: `speech-to-text-transcription`
- Inbound media understanding: `inbound-media-understanding`
- Generated artifact delivery: `generated-artifact-delivery`

### Local model providers: Ollama, vLLM, SGLang, LM Studio

- Surface id: `local-model-providers-ollama-vllm-sglang-lm-studio`

#### Provider Setup, Lifecycle, and Diagnostics

- Category id: `local-model-providers-ollama-vllm-sglang-lm-studio.provider-setup-lifecycle-and-diagnostics`
- Provider Selection: `provider-selection`
- Onboarding: `onboarding`
- localService configuration: `localservice-configuration`
- Process startup and readiness: `process-startup-and-readiness`
- Request leases and idle shutdown: `request-leases-and-idle-shutdown`
- Health checks and restart: `health-checks-and-restart`
- Provider recipes: `provider-recipes`
- Local provider status: `local-provider-status`
- Backend reachability probes: `backend-reachability-probes`
- Model availability errors: `model-availability-errors`
- Memory readiness diagnostics: `memory-readiness-diagnostics`
- Provider troubleshooting docs: `provider-troubleshooting-docs`

#### Native Provider Plugins

- Category id: `local-model-providers-ollama-vllm-sglang-lm-studio.native-provider-plugins`
- Ollama setup and model pulling: `ollama-setup-and-model-pulling`
- Model discovery: `model-discovery`
- Streaming and vision: `streaming-and-vision`
- Ollama embeddings: `ollama-embeddings`
- Web-search support: `web-search-support`
- LM Studio setup: `lm-studio-setup`
- Model discovery and auth: `model-discovery-and-auth`
- Model preload and JIT loading: `model-preload-and-jit-loading`
- Streaming compatibility: `streaming-compatibility`
- LM Studio embeddings: `lm-studio-embeddings`

#### OpenAI-Compatible Runtime Compatibility

- Category id: `local-model-providers-ollama-vllm-sglang-lm-studio.openai-compatible-runtime-compatibility`
- Bundled provider setup: `bundled-provider-setup`
- Model Discovery Endpoint: `model-discovery-endpoint`
- Non-interactive configuration: `non-interactive-configuration`
- vLLM thinking controls: `vllm-thinking-controls`
- OpenAI-compatible chat and tool semantics: `openai-compatible-chat-and-tool-semantics`
- SGLang compatibility guidance: `sglang-compatibility-guidance`
- Request Stream Compatibility: `request-stream-compatibility`
- Tool Calling: `tool-calling`

#### Local Memory and Embeddings

- Category id: `local-model-providers-ollama-vllm-sglang-lm-studio.local-memory-and-embeddings`
- Embedding provider selection: `embedding-provider-selection`
- Memory search readiness: `memory-search-readiness`
- memoryFlush model override: `memoryflush-model-override`
- Fallback lexical search: `fallback-lexical-search`
- Provider mismatch guidance: `provider-mismatch-guidance`

#### Network Safety and Prompt Controls

- Category id: `local-model-providers-ollama-vllm-sglang-lm-studio.network-safety-and-prompt-controls`
- Safety Network: `safety-network`
- Prompt Pressure Controls: `prompt-pressure-controls`

### Long-tail hosted providers

- Surface id: `long-tail-hosted-providers`

#### Hosted LLM Providers

- Category id: `long-tail-hosted-providers.hosted-llm-providers`
- Bedrock setup: `bedrock-setup`
- Gateway/proxy routing: `gateway-proxy-routing`
- Copilot/OpenCode hosted access: `copilot-opencode-hosted-access`
- Proxy capability diagnostics: `proxy-capability-diagnostics`
- Hosted text completion: `hosted-text-completion`
- Tool-call and streaming compatibility: `tool-call-and-streaming-compatibility`
- Model catalog resolution: `model-catalog-resolution`
- Provider-specific request shaping: `provider-specific-request-shaping`
- Regional provider setup: `regional-provider-setup`
- Region and plan routing: `region-and-plan-routing`
- Regional live smoke: `regional-live-smoke`
- Account prerequisite diagnostics: `account-prerequisite-diagnostics`

#### Hosted Media Providers

- Category id: `long-tail-hosted-providers.hosted-media-providers`
- Image generation providers: `image-generation-providers`
- Video generation providers: `video-generation-providers`
- Music generation providers: `music-generation-providers`
- Media mode coverage: `media-mode-coverage`
- Text-to-speech providers: `text-to-speech-providers`
- Speech-to-text providers: `speech-to-text-providers`
- Realtime transcription providers: `realtime-transcription-providers`
- Audio format diagnostics: `audio-format-diagnostics`

#### Provider Operations

- Category id: `long-tail-hosted-providers.provider-operations`
- Provider directory: `provider-directory`
- Provider install catalog: `provider-install-catalog`
- Model catalog metadata: `model-catalog-metadata`
- Catalog parity checks: `catalog-parity-checks`
- Provider setup descriptors: `provider-setup-descriptors`
- Auth profiles and aliases: `auth-profiles-and-aliases`
- Credential health probes: `credential-health-probes`
- Key rotation and recovery: `key-rotation-and-recovery`
- Direct provider smoke: `direct-provider-smoke`
- Gateway live smoke: `gateway-live-smoke`
- Models status probes: `models-status-probes`
- Fallback trace and repair: `fallback-trace-and-repair`

### Web search tools

- Surface id: `web-search-tools`

#### Search Providers

- Category id: `web-search-tools.search-providers`
- API-backed providers: `tools.tavily-search`
- Keyless and self-hosted providers: `keyless-and-self-hosted-providers`
- Provider comparison and auto-detection: `provider-comparison-and-auto-detection`
- Provider-specific filters and extraction: `provider-specific-filters-and-extraction`
- Result normalization: `result-normalization`
- OpenAI native web_search: `openai-native-web-search`
- Codex native web_search: `codex-native-web-search`
- Gemini grounding: `gemini-grounding`
- Grok web grounding: `grok-web-grounding`
- Kimi web search: `kimi-web-search`
- Provider-native citations: `provider-native-citations`
- Model and filter routing: `model-and-filter-routing`
- webSearchProviders: `websearchproviders`
- registerWebSearchProvider: `registerwebsearchprovider`
- webFetchProviders: `webfetchproviders`
- registerWebFetchProvider: `registerwebfetchprovider`
- public-artifact loading: `public-artifact-loading`
- runtime resolution: `runtime-resolution`
- contract tests: `contract-tests`

#### Setup and Diagnostics

- Category id: `web-search-tools.setup-and-diagnostics`
- Provider credentials: `provider-credentials`
- Default provider selection: `default-provider-selection`
- Credential repair: `credential-repair`
- Status checks: `status-checks`
- Quota errors: `quota-errors`
- Cache controls: `cache-controls`
- Provider diagnostics: `provider-diagnostics`
- Retry and fallback: `retry-and-fallback`
- Operator repair: `operator-repair`

#### Network Safety

- Category id: `web-search-tools.network-safety`
- Network Safety: `network-safety`
- SSRF: `ssrf`
- Redirects: `redirects`
- Untrusted Content: `untrusted-content`

#### Tool Availability and Fetch

- Category id: `web-search-tools.tool-availability-and-fetch`
- web_search exposure: `models.openai`, `tools.web-search`
- web_fetch exposure: `tools.web-fetch`
- x_search exposure: `x-search-exposure`
- group:web policy: `group-web-policy`
- disabled-state diagnostics: `disabled-state-diagnostics`
- provider/model gating: `provider-model-gating`
- URL fetch: `url-fetch`
- HTML extraction: `tools.tavily-extract`
- PDF/text extraction: `pdf-text-extraction`
- Safe truncation: `safe-truncation`
- Content citation handoff: `content-citation-handoff`

### Browser automation and exec/sandbox tools

- Surface id: `browser-automation-and-exec-sandbox-tools`

#### Browser Automation

- Category id: `browser-automation-and-exec-sandbox-tools.browser-automation`
- Browser Actions: `browser-actions`
- Snapshots: `snapshots`
- Artifacts: `character.persona`, `personal.task-followthrough`, `tools.followthrough`, `workspace.artifacts`, `workspace.builds`, `workspace.long-running-task`, `workspace.repo-discovery`
- Browser Plugin Service: `browser-plugin-service`
- Profiles: `profiles`
- Browser Security: `browser-security`
- SSRF: `ssrf`
- Remote Control: `remote-control`

#### Tool Invocation and Execution

- Category id: `browser-automation-and-exec-sandbox-tools.tool-invocation-and-execution`
- Exec Routing: `tools.bash`, `tools.exec`
- Process Lifecycle: `workspace.artifacts`, `workspace.builds`, `workspace.long-running-task`, `workspace.repo-discovery`
- Direct Tool Invoke API: `plugins.mcp-tools`, `plugins.skills`, `tools.invocation`
- Node System.run: `node-system-run`
- Host Exec Approvals: `host-exec-approvals`
- Elevated Mode: `elevated-mode`

#### Sandbox and Tool Policy

- Category id: `browser-automation-and-exec-sandbox-tools.sandbox-and-tool-policy`
- Sandbox Backends: `sandbox-backends`
- Workspace Isolation: `workspace-isolation`
- Sandboxed Browser: `sandboxed-browser`
- Codex Dynamic Tools: `codex-dynamic-tools`
- Tool Policy: `tool-policy`
- Sandbox Tool Gates: `sandbox-tool-gates`

### Image/video/music generation tools

- Surface id: `image-video-music-generation-tools`

#### Media Routing and Discovery

- Category id: `image-video-music-generation-tools.media-routing-and-discovery`
- default media model config: `default-media-model-config`
- per-call model refs and fallbacks: `per-call-model-refs-and-fallbacks`
- auth-backed tool discovery: `auth-backed-tool-discovery`
- action=list provider inspection: `action-list-provider-inspection`

#### Task Lifecycle and Delivery

- Category id: `image-video-music-generation-tools.task-lifecycle-and-delivery`
- background task creation: `background-task-creation`
- task status/list/show/cancel: `task-status-list-show-cancel`
- duplicate guards: `duplicate-guards`
- progress keepalive: `progress-keepalive`
- completion/failure wake: `completion-failure-wake`
- no-session inline fallback: `no-session-inline-fallback`
- local media persistence: `local-media-persistence`
- MIME/filename inference: `mime-filename-inference`
- Hosted URL fallback: `hosted-url-fallback`
- message-tool handoff: `message-tool-handoff`
- idempotent missing-media fallback: `idempotent-missing-media-fallback`
- channel attachment proof: `channel-attachment-proof`

#### Image Generation

- Category id: `image-video-music-generation-tools.image-generation`
- text-to-image: `text-to-image`
- reference-image editing: `reference-image-editing`
- output hints: `output-hints`
- action=status: `action-status`
- provider attempt metadata: `provider-attempt-metadata`
- OpenAI/Codex OAuth: `openai-codex-oauth`
- API-key OpenAI: `api-key-openai`
- OpenRouter/xAI/fal/LiteLLM/DeepInfra/Google/MiniMax/ComfyUI auth: `openrouter-xai-fal-litellm-deepinfra-google-minimax-comfyui-auth`
- provider error diagnostics: `provider-error-diagnostics`

#### Video Generation

- Category id: `image-video-music-generation-tools.video-generation`
- text-to-video: `text-to-video`
- image-to-video: `image-to-video`
- video-to-video: `video-to-video`
- reference role validation: `reference-role-validation`
- audio refs: `audio-refs`
- typed providerOptions: `typed-provideroptions`
- queue-backed jobs: `queue-backed-jobs`
- polling/timeout handling: `polling-timeout-handling`
- Hosted URL download: `hosted-url-download`
- provider skip explanations: `provider-skip-explanations`
- returned asset metadata: `returned-asset-metadata`

#### Music Generation

- Category id: `image-video-music-generation-tools.music-generation`
- prompt and lyrics input: `prompt-and-lyrics-input`
- instrumental mode: `instrumental-mode`
- duration/format controls: `duration-format-controls`
- image-reference edit lanes: `image-reference-edit-lanes`
- generated audio outputs: `generated-audio-outputs`
- provider fallback: `provider-fallback`
