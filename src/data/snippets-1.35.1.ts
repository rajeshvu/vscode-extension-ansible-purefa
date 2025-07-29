import { SnippetItem } from "./snippets";

export const snippets_1_35_1: SnippetItem[] = [
    {
        "label": "Create new AD account",
        "description": "- purestorage.flasharray.purefa_ad",
        "body": "\n- name: Create new AD account\n  purestorage.flasharray.purefa_ad:\n    name: ad_account\n    computer: FLASHARRAY\n    domain: acme.com\n    join_ou: OU=Acme,OU=Dev\n    username: Administrator\n    password: Password\n    kerberos_servers:\n    - kdc.acme.com\n    directory_servers:\n    - ldap.acme.com\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete AD account locally",
        "description": "- purestorage.flasharray.purefa_ad",
        "body": "\n- name: Delete AD account locally\n  purestorage.flasharray.purefa_ad:\n    name: ad_account\n    local_only: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Fully delete AD account. Note that correct AD permissions are required",
        "description": "- purestorage.flasharray.purefa_ad",
        "body": "\n- name: Fully delete AD account. Note that correct AD permissions are required\n  purestorage.flasharray.purefa_ad:\n    name: ad_account\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set global login parameters",
        "description": "- purestorage.flasharray.purefa_admin",
        "body": "\n- name: Set global login parameters\n  purestorage.flasharray.purefa_admin:\n    sso: false\n    max_login: 5\n    min_password: 10\n    lockout: 300\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add new email recipient and enable, or enable existing email",
        "description": "- purestorage.flasharray.purefa_alert",
        "body": "\n- name: Add new email recipient and enable, or enable existing email\n  purestorage.flasharray.purefa_alert:\n    address: user@domain.com\n    enabled: true\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete existing email recipient",
        "description": "- purestorage.flasharray.purefa_alert",
        "body": "\n- name: Delete existing email recipient\n  purestorage.flasharray.purefa_alert:\n    state: absent\n    address: user@domain.com\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create API token ansible-token",
        "description": "- purestorage.flasharray.purefa_apiclient",
        "body": "\n- name: Create API token ansible-token\n  purestorage.flasharray.purefa_apiclient:\n    name: ansible-token\n    issuer: Pure Storage\n    token_ttl: 3000\n    role: array_admin\n    public_key: '{{lookup(''file'', ''public_pem_file'') }}'\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable API CLient",
        "description": "- purestorage.flasharray.purefa_apiclient",
        "body": "\n- name: Disable API CLient\n  purestorage.flasharray.purefa_apiclient:\n    name: ansible-token\n    enabled: false\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable API CLient",
        "description": "- purestorage.flasharray.purefa_apiclient",
        "body": "\n- name: Enable API CLient\n  purestorage.flasharray.purefa_apiclient:\n    name: ansible-token\n    enabled: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete API Client",
        "description": "- purestorage.flasharray.purefa_apiclient",
        "body": "\n- name: Delete API Client\n  purestorage.flasharray.purefa_apiclient:\n    state: absent\n    name: ansible-token\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set new array name",
        "description": "- purestorage.flasharray.purefa_arrayname",
        "body": "\n- name: Set new array name\n  purestorage.flasharray.purefa_arrayname:\n    name: new-array-name\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set new banner text",
        "description": "- purestorage.flasharray.purefa_banner",
        "body": "\n- name: Set new banner text\n  purestorage.flasharray.purefa_banner:\n    banner: 'Banner over\n\n      two lines'\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete banner text",
        "description": "- purestorage.flasharray.purefa_banner",
        "body": "\n- name: Delete banner text\n  purestorage.flasharray.purefa_banner:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Show available expansion capacities",
        "description": "- purestorage.flasharray.purefa_cbsexpand",
        "body": "\n- name: Show available expansion capacities\n  purestorage.flasharray.purefa_cbsexpand:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Expand CBS to new capacity",
        "description": "- purestorage.flasharray.purefa_cbsexpand",
        "body": "\n- name: Expand CBS to new capacity\n  purestorage.flasharray.purefa_cbsexpand:\n    state: expand\n    capacity: 10995116277760\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create SSL certifcate foo",
        "description": "- purestorage.flasharray.purefa_certs",
        "body": "\n- name: Create SSL certifcate foo\n  purestorage.flasharray.purefa_certs:\n    name: foo\n    key_size: 4096\n    country: US\n    province: FL\n    locality: Miami\n    organization: Acme Inc\n    org_unit: DevOps\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete SSL certificate foo",
        "description": "- purestorage.flasharray.purefa_certs",
        "body": "\n- name: Delete SSL certificate foo\n  purestorage.flasharray.purefa_certs:\n    name: foo\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Request CSR",
        "description": "- purestorage.flasharray.purefa_certs",
        "body": "\n- name: Request CSR\n  purestorage.flasharray.purefa_certs:\n    state: sign\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Request CSR with updated fields",
        "description": "- purestorage.flasharray.purefa_certs",
        "body": "\n- name: Request CSR with updated fields\n  purestorage.flasharray.purefa_certs:\n    state: sign\n    org_unit: Development\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Regenerate key for SSL foo",
        "description": "- purestorage.flasharray.purefa_certs",
        "body": "\n- name: Regenerate key for SSL foo\n  purestorage.flasharray.purefa_certs:\n    generate: true\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Import SSL Cert foo and Private Key",
        "description": "- purestorage.flasharray.purefa_certs",
        "body": "\n- name: Import SSL Cert foo and Private Key\n  purestorage.flasharray.purefa_certs:\n    state: import\n    name: foo\n    certificate: '{{lookup(''file'', ''example.crt'') }}'\n    key: '{{lookup(''file'', ''example.key'') }}'\n    passphrase: password\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create an IPv4 async connection to remote array",
        "description": "- purestorage.flasharray.purefa_connect",
        "body": "\n- name: Create an IPv4 async connection to remote array\n  purestorage.flasharray.purefa_connect:\n    target_url: 10.10.10.20\n    target_api: 9c0b56bc-f941-f7a6-9f85-dcc3e9a8f7d6\n    connection: async\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create an IPv6 async connection to remote array",
        "description": "- purestorage.flasharray.purefa_connect",
        "body": "\n- name: Create an IPv6 async connection to remote array\n  purestorage.flasharray.purefa_connect:\n    target_url: '[2001:db8:abcd:12::10]'\n    target_api: 9c0b56bc-f941-f7a6-9f85-dcc3e9a8f7d6\n    connection: async\n    fa_url: '[2001:db8:abcd:12::13]'\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete connection to remote array",
        "description": "- purestorage.flasharray.purefa_connect",
        "body": "\n- name: Delete connection to remote array\n  purestorage.flasharray.purefa_connect:\n    state: absent\n    target_url: 10.10.10.20\n    target_api: 9c0b56bc-f941-f7a6-9f85-dcc3e9a8f7d6\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable Console Lockout",
        "description": "- purestorage.flasharray.purefa_console",
        "body": "\n- name: Enable Console Lockout\n  purestorage.flasharray.purefa_console:\n    state: enable\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable Console Lockout",
        "description": "- purestorage.flasharray.purefa_console",
        "body": "\n- name: Disable Console Lockout\n  purestorage.flasharray.purefa_console:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add protection group foo::bar as default for pod foo",
        "description": "- purestorage.flasharray.purefa_default_protection",
        "body": "\n- name: Add protection group foo::bar as default for pod foo\n  purestorage.flasharray.purefa_default_protection:\n    name: bar\n    pod: foo\n    scope: pod\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add protection group foo as default for array",
        "description": "- purestorage.flasharray.purefa_default_protection",
        "body": "\n- name: Add protection group foo as default for array\n  purestorage.flasharray.purefa_default_protection:\n    name: foo\n    scope: array\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Remove protection group foo from array default protection",
        "description": "- purestorage.flasharray.purefa_default_protection",
        "body": "\n- name: Remove protection group foo from array default protection\n  purestorage.flasharray.purefa_default_protection:\n    name: foo\n    scope: array\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Clear default protection for the array",
        "description": "- purestorage.flasharray.purefa_default_protection",
        "body": "\n- name: Clear default protection for the array\n  purestorage.flasharray.purefa_default_protection:\n    name: ''\n    scope: array\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Create direcotry foo in filesysten bar with path zeta",
        "description": "- purestorage.flasharray.purefa_directory",
        "body": "\n- name: Create direcotry foo in filesysten bar with path zeta\n  purestorage.flasharray.purefa_directory:\n    name: foo\n    filesystem: bar\n    path: zeta\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Rename directory foo to fin in filesystem bar",
        "description": "- purestorage.flasharray.purefa_directory",
        "body": "\n- name: Rename directory foo to fin in filesystem bar\n  purestorage.flasharray.purefa_directory:\n    name: foo\n    rename: fin\n    filesystem: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete diectory foo in filesystem bar",
        "description": "- purestorage.flasharray.purefa_directory",
        "body": "\n- name: Delete diectory foo in filesystem bar\n  purestorage.flasharray.purefa_directory:\n    name: foo\n    filesystem: bar\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create a snapshot direcotry foo in filesysten bar for client test with suffix test",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Create a snapshot direcotry foo in filesysten bar for client test with suffix\n    test\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: test\n    suffix: test\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update retention time for a snapshot foo:bar.client.test",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Update retention time for a snapshot foo:bar.client.test\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: client\n    suffix: test\n    keep_for: 300\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete snapshot foo:bar.client.test",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Delete snapshot foo:bar.client.test\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: client\n    suffix: test\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Recover deleted snapshot foo:bar.client.test",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Recover deleted snapshot foo:bar.client.test\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: client\n    suffix: test\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete and eradicate snapshot foo:bar.client.test",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Delete and eradicate snapshot foo:bar.client.test\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: client\n    suffix: test\n    state: absent\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Eradicate deleted snapshot foo:bar.client.test",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Eradicate deleted snapshot foo:bar.client.test\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: client\n    suffix: test\n    eradicate: true\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Rename snapshot",
        "description": "- purestorage.flasharray.purefa_dirsnap",
        "body": "\n- name: Rename snapshot\n  purestorage.flasharray.purefa_dirsnap:\n    name: foo\n    filesystem: bar\n    client: client\n    suffix: test\n    rename: true\n    new_client: client2\n    new_suffix: test2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng management DNS settings",
        "description": "- purestorage.flasharray.purefa_dns",
        "body": "\n- name: Delete exisitng management DNS settings\n  purestorage.flasharray.purefa_dns:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set managemnt DNS settings",
        "description": "- purestorage.flasharray.purefa_dns",
        "body": "\n- name: Set managemnt DNS settings\n  purestorage.flasharray.purefa_dns:\n    domain: purestorage.com\n    nameservers:\n    - 8.8.8.8\n    - 8.8.4.4\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set file DNS settings",
        "description": "- purestorage.flasharray.purefa_dns",
        "body": "\n- name: Set file DNS settings\n  purestorage.flasharray.purefa_dns:\n    domain: purestorage.com\n    nameservers:\n    - 8.8.8.8\n    - 8.8.4.4\n    name: ad_dns\n    service: file\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete file DNS settings",
        "description": "- purestorage.flasharray.purefa_dns",
        "body": "\n- name: Delete file DNS settings\n  purestorage.flasharray.purefa_dns:\n    state: absent\n    name: ad_dns\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete existing directory service",
        "description": "- purestorage.flasharray.purefa_ds",
        "body": "\n- name: Delete existing directory service\n  purestorage.flasharray.purefa_ds:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update empty directory service (disabled)",
        "description": "- purestorage.flasharray.purefa_ds",
        "body": "\n- name: Update empty directory service (disabled)\n  purestorage.flasharray.purefa_ds:\n    dstype: management\n    uri: ldap://lab.purestorage.com\n    base_dn: DC=lab,DC=purestorage,DC=com\n    bind_user: Administrator\n    bind_password: password\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable existing directory service",
        "description": "- purestorage.flasharray.purefa_ds",
        "body": "\n- name: Enable existing directory service\n  purestorage.flasharray.purefa_ds:\n    enable: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable existing directory service",
        "description": "- purestorage.flasharray.purefa_ds",
        "body": "\n- name: Disable existing directory service\n  purestorage.flasharray.purefa_ds:\n    enable: false\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update empty directory service (enabled)",
        "description": "- purestorage.flasharray.purefa_ds",
        "body": "\n- name: Update empty directory service (enabled)\n  purestorage.flasharray.purefa_ds:\n    enable: true\n    dstype: management\n    uri: ldap://lab.purestorage.com\n    base_dn: DC=lab,DC=purestorage,DC=com\n    bind_user: Administrator\n    bind_password: password\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Upload CA certificate for management DNS and check peer",
        "description": "- purestorage.flasharray.purefa_ds",
        "body": "\n- name: Upload CA certificate for management DNS and check peer\n  purestorage.flasharray.purefa_ds:\n    enable: true\n    dstype: management\n    certificate: '{{lookup(''file'', ''ca_cert.pem'') }}'\n    check_peer: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng array_admin directory service role",
        "description": "- purestorage.flasharray.purefa_dsrole",
        "body": "\n- name: Delete exisitng array_admin directory service role\n  purestorage.flasharray.purefa_dsrole:\n    role: array_admin\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create observability directory service role with readonly policy",
        "description": "- purestorage.flasharray.purefa_dsrole",
        "body": "\n- name: Create observability directory service role with readonly policy\n  purestorage.flasharray.purefa_dsrole:\n    name: observability\n    role: readonly\n    group_base: OU=PureGroups,OU=ReadOnly\n    group: o11y\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update system-defined array_admin directory service role",
        "description": "- purestorage.flasharray.purefa_dsrole",
        "body": "\n- name: Update system-defined array_admin directory service role\n  purestorage.flasharray.purefa_dsrole:\n    role: array_admin\n    group_base: OU=PureGroups,OU=SANManagers\n    group: pureadmins\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update directory service role policy",
        "description": "- purestorage.flasharray.purefa_dsrole",
        "body": "\n- name: Update directory service role policy\n  purestorage.flasharray.purefa_dsrole:\n    name: observability\n    role: ops_admin\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng array_admin directory service role",
        "description": "- purestorage.flasharray.purefa_dsrole_old",
        "body": "\n- name: Delete exisitng array_admin directory service role\n  purestorage.flasharray.purefa_dsrole_old:\n    role: array_admin\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create array_admin directory service role",
        "description": "- purestorage.flasharray.purefa_dsrole_old",
        "body": "\n- name: Create array_admin directory service role\n  purestorage.flasharray.purefa_dsrole_old:\n    role: array_admin\n    group_base: OU=PureGroups,OU=SANManagers\n    group: pureadmins\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update ops_admin directory service role",
        "description": "- purestorage.flasharray.purefa_dsrole_old",
        "body": "\n- name: Update ops_admin directory service role\n  purestorage.flasharray.purefa_dsrole_old:\n    role: ops_admin\n    group_base: OU=PureGroups\n    group: opsgroup\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new endpoint named foo",
        "description": "- purestorage.flasharray.purefa_endpoint",
        "body": "\n- name: Create new endpoint named foo\n  purestorage.flasharray.purefa_endpoint:\n    name: test-endpoint\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Delete and eradicate endpoint named foo",
        "description": "- purestorage.flasharray.purefa_endpoint",
        "body": "\n- name: Delete and eradicate endpoint named foo\n  purestorage.flasharray.purefa_endpoint:\n    name: foo\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename endpoint foor to bar",
        "description": "- purestorage.flasharray.purefa_endpoint",
        "body": "\n- name: Rename endpoint foor to bar\n  purestorage.flasharray.purefa_endpoint:\n    name: foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set eradication timer to 30 days",
        "description": "- purestorage.flasharray.purefa_eradication",
        "body": "\n- name: Set eradication timer to 30 days\n  purestorage.flasharray.purefa_eradication:\n    timer: 30\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set eradication timer to 1 day",
        "description": "- purestorage.flasharray.purefa_eradication",
        "body": "\n- name: Set eradication timer to 1 day\n  purestorage.flasharray.purefa_eradication:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Sign EULA for FlashArray",
        "description": "- purestorage.flasharray.purefa_eula",
        "body": "\n- name: Sign EULA for FlashArray\n  purestorage.flasharray.purefa_eula:\n    company: ACME Storage, Inc.\n    name: Fred Bloggs\n    title: Storage Manager\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create NFS and SMB exports for directory foo in filesysten bar",
        "description": "- purestorage.flasharray.purefa_export",
        "body": "\n- name: Create NFS and SMB exports for directory foo in filesysten bar\n  purestorage.flasharray.purefa_export:\n    name: export1\n    filesystem: bar\n    directory: foo\n    nfs_policy: nfs-example\n    smb_policy: smb-example\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete NFS export for directory foo in filesystem bar",
        "description": "- purestorage.flasharray.purefa_export",
        "body": "\n- name: Delete NFS export for directory foo in filesystem bar\n  purestorage.flasharray.purefa_export:\n    name: export1\n    filesystem: bar\n    directory: foo\n    nfs_policy: nfs-example\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Copy a file from dir foo to dir bar",
        "description": "- purestorage.flasharray.purefa_file",
        "body": "\n- name: Copy a file from dir foo to dir bar\n  purestorage.flasharray.purefa_file:\n    source_file: /directory1/file1\n    source_dir: fs1:root\n    target_file: /diff_dir/file1\n    target_dir: fs1:root\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Copy a file in a direcotry to the same directory with a different name",
        "description": "- purestorage.flasharray.purefa_file",
        "body": "\n- name: Copy a file in a direcotry to the same directory with a different name\n  purestorage.flasharray.purefa_file:\n    source_file: /directory1/file1\n    source_dir: fs1:root\n    target_file: /directory_1/file2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Copy a file in a direcotry to an existing file with overwrite",
        "description": "- purestorage.flasharray.purefa_file",
        "body": "\n- name: Copy a file in a direcotry to an existing file with overwrite\n  purestorage.flasharray.purefa_file:\n    source_file: /directory1/file1\n    source_dir: fs1:root\n    target_file: /diff_dir/file1\n    target_dir: fs2:root\n    overwrite: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create a new fleet",
        "description": "- purestorage.flasharray.purefa_fleet",
        "body": "\n- name: Create a new fleet\n  purestorage.flasharray.purefa_fleet:\n    name: foo\n    state: create\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add a member to fleet foo",
        "description": "- purestorage.flasharray.purefa_fleet",
        "body": "\n- name: Add a member to fleet foo\n  purestorage.flasharray.purefa_fleet:\n    name: foo\n    member_url: array2\n    member_api: c6033033-fe69-2515-a9e8-966bb7fe4b40\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete a member from fleet foo",
        "description": "- purestorage.flasharray.purefa_fleet",
        "body": "\n- name: Delete a member from fleet foo\n  purestorage.flasharray.purefa_fleet:\n    name: foo\n    member_url: array2\n    member_api: c6033033-fe69-2515-a9e8-966bb7fe4b40\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete fleet foo",
        "description": "- purestorage.flasharray.purefa_fleet",
        "body": "\n- name: Delete fleet foo\n  purestorage.flasharray.purefa_fleet:\n    name: foo\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create file system foo",
        "description": "- purestorage.flasharray.purefa_fs",
        "body": "\n- name: Create file system foo\n  purestorage.flasharray.purefa_fs:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete and eradicate file system foo",
        "description": "- purestorage.flasharray.purefa_fs",
        "body": "\n- name: Delete and eradicate file system foo\n  purestorage.flasharray.purefa_fs:\n    name: foo\n    eradicate: true\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Rename file system foo to bar",
        "description": "- purestorage.flasharray.purefa_fs",
        "body": "\n- name: Rename file system foo to bar\n  purestorage.flasharray.purefa_fs:\n    name: foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable identification LED",
        "description": "- purestorage.flasharray.purefa_hardware",
        "body": "\n- name: Enable identification LED\n  purestorage.flasharray.purefa_hardware:\n    name: CH1.FB1\n    enabled: true\n    fa_url: 10.10.10.2\n    api_token: T-68618f31-0c9e-4e57-aa44-5306a2cf10e3\n"
    },
    {
        "label": "Disable identification LED",
        "description": "- purestorage.flasharray.purefa_hardware",
        "body": "\n- name: Disable identification LED\n  purestorage.flasharray.purefa_hardware:\n    name: CH1.FB1\n    enabled: false\n    fa_url: 10.10.10.2\n    api_token: T-68618f31-0c9e-4e57-aa44-5306a2cf10e3\n"
    },
    {
        "label": "Create empty hostgroup",
        "description": "- purestorage.flasharray.purefa_hg",
        "body": "\n- name: Create empty hostgroup\n  purestorage.flasharray.purefa_hg:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add hosts and volumes to existing or new hostgroup",
        "description": "- purestorage.flasharray.purefa_hg",
        "body": "\n- name: Add hosts and volumes to existing or new hostgroup\n  purestorage.flasharray.purefa_hg:\n    name: foo\n    host:\n    - host1\n    - host2\n    volume:\n    - vol1\n    - vol2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete hosts and volumes from hostgroup",
        "description": "- purestorage.flasharray.purefa_hg",
        "body": "\n- name: Delete hosts and volumes from hostgroup\n  purestorage.flasharray.purefa_hg:\n    name: foo\n    host:\n    - host1\n    - host2\n    volume:\n    - vol1\n    - vol2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Delete hostgroup",
        "description": "- purestorage.flasharray.purefa_hg",
        "body": "\n- name: Delete hostgroup\n  purestorage.flasharray.purefa_hg:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename hostgroup",
        "description": "- purestorage.flasharray.purefa_hg",
        "body": "\n- name: Rename hostgroup\n  purestorage.flasharray.purefa_hg:\n    name: foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create host group with hosts and volumes",
        "description": "- purestorage.flasharray.purefa_hg",
        "body": "\n- name: Create host group with hosts and volumes\n  purestorage.flasharray.purefa_hg:\n    name: bar\n    host:\n    - host1\n    - host2\n    volume:\n    - vol1\n    - vol2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new AIX host",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Create new AIX host\n  purestorage.flasharray.purefa_host:\n    name: foo\n    personality: aix\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create host bar in existing realm foo",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Create host bar in existing realm foo\n  purestorage.flasharray.purefa_host:\n    name: foo::bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create 10 hosts with index starting at 10 but padded with 3 digits",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Create 10 hosts with index starting at 10 but padded with 3 digits\n  purestorage.flasharray.purefa_host:\n    name: foo\n    personality: vms\n    suffix: bar\n    count: 10\n    start: 10\n    digits: 3\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Rename host foo to bar",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Rename host foo to bar\n  purestorage.flasharray.purefa_host:\n    name: foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete host",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Delete host\n  purestorage.flasharray.purefa_host:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Make host bar with wwn ports",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Make host bar with wwn ports\n  purestorage.flasharray.purefa_host:\n    name: bar\n    wwns:\n    - 00:00:00:00:00:00:00:00\n    - 31314874576271\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Make host bar with iSCSI ports",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Make host bar with iSCSI ports\n  purestorage.flasharray.purefa_host:\n    name: bar\n    iqn:\n    - iqn.1994-05.com.redhat:7d366003913\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Make host bar with NVMe ports",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Make host bar with NVMe ports\n  purestorage.flasharray.purefa_host:\n    name: bar\n    nqn:\n    - nqn.2014-08.com.vendor:nvme:nvm-subsystem-sn-d78432\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Make mixed protocol host",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Make mixed protocol host\n  purestorage.flasharray.purefa_host:\n    name: bar\n    iqn:\n    - iqn.1994-05.com.redhat:7d366003914\n    wwns:\n    - 00:00:00:00:00:00:00:01\n    - 31314874576272\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Map host foo to volume bar as LUN ID 12",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Map host foo to volume bar as LUN ID 12\n  purestorage.flasharray.purefa_host:\n    name: foo\n    volume: bar\n    lun: 12\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disconnect volume bar from host foo",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Disconnect volume bar from host foo\n  purestorage.flasharray.purefa_host:\n    name: foo\n    volume: bar\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add preferred arrays to host foo",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Add preferred arrays to host foo\n  purestorage.flasharray.purefa_host:\n    name: foo\n    preferred_array:\n    - array1\n    - array2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete preferred arrays from host foo",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Delete preferred arrays from host foo\n  purestorage.flasharray.purefa_host:\n    name: foo\n    preferred_array: delete\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng WWNs from host foo (does not delete host object)",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Delete exisitng WWNs from host foo (does not delete host object)\n  purestorage.flasharray.purefa_host:\n    name: foo\n    wwns: ''\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set CHAP target and host username/password pairs",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Set CHAP target and host username/password pairs\n  purestorage.flasharray.purefa_host:\n    name: foo\n    target_user: user1\n    target_password: passwrodpassword\n    host_user: user2\n    host_password: passwrodpassword\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete CHAP target and host username/password pairs",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Delete CHAP target and host username/password pairs\n  purestorage.flasharray.purefa_host:\n    name: foo\n    target_user: user\n    target_password: clear\n    host_user: user\n    host_password: clear\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Move host foo from the array to realm bar",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Move host foo from the array to realm bar\n  purestorage.flasharray.purefa_host:\n    name: foo\n    move: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Move host foo from realm bar back to array",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Move host foo from realm bar back to array\n  purestorage.flasharray.purefa_host:\n    name: bar::foo\n    move: local\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Rename host foo in realm test to bar",
        "description": "- purestorage.flasharray.purefa_host",
        "body": "\n- name: Rename host foo in realm test to bar\n  purestorage.flasharray.purefa_host:\n    name: test::foo\n    rename: test::bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "collect default set of information",
        "description": "- purestorage.flasharray.purefa_info",
        "body": "\n- name: collect default set of information\n  purestorage.flasharray.purefa_info:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n  register: array_info\n"
    },
    {
        "label": "collect configuration and capacity information",
        "description": "- purestorage.flasharray.purefa_info",
        "body": "\n- name: collect configuration and capacity information\n  purestorage.flasharray.purefa_info:\n    gather_subset:\n    - config\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n  register: array_info\n"
    },
    {
        "label": "collect all information",
        "description": "- purestorage.flasharray.purefa_info",
        "body": "\n- name: collect all information\n  purestorage.flasharray.purefa_info:\n    gather_subset:\n    - all\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "collect FlashArray invenroty",
        "description": "- purestorage.flasharray.purefa_inventory",
        "body": "\n- name: collect FlashArray invenroty\n  purestorage.flasharray.purefa_inventory:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create KMIP obejct",
        "description": "- purestorage.flasharray.purefa_kmip",
        "body": "\n- name: Create KMIP obejct\n  purestorage.flasharray.purefa_kmip:\n    name: foo\n    certificate: bar\n    ca_certificate: '{{lookup(''file'', ''example.crt'') }}'\n    uris:\n    - 1.1.1.1:8888\n    - 2.3.3.3:9999\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete KMIP object",
        "description": "- purestorage.flasharray.purefa_kmip",
        "body": "\n- name: Delete KMIP object\n  purestorage.flasharray.purefa_kmip:\n    name: foo\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update KMIP object",
        "description": "- purestorage.flasharray.purefa_kmip",
        "body": "\n- name: Update KMIP object\n  purestorage.flasharray.purefa_kmip:\n    name: foo\n    ca_certificate: '{{lookup(''file'', ''example2.crt'') }}'\n    uris:\n    - 3.3.3.3:8888\n    - 4.4.4.4:9999\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "List last 100 audit events",
        "description": "- purestorage.flasharray.purefa_logging",
        "body": "\n- name: List last 100 audit events\n  purestorage.flasharray.purefa_logging:\n    limit: 100\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "List last 24 session events",
        "description": "- purestorage.flasharray.purefa_logging",
        "body": "\n- name: List last 24 session events\n  purestorage.flasharray.purefa_logging:\n    limit: 24\n    log_type: session\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng maintenance window",
        "description": "- purestorage.flasharray.purefa_maintenance",
        "body": "\n- name: Delete exisitng maintenance window\n  purestorage.flasharray.purefa_maintenance:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set maintnence window to default of 1 hour",
        "description": "- purestorage.flasharray.purefa_maintenance",
        "body": "\n- name: Set maintnence window to default of 1 hour\n  purestorage.flasharray.purefa_maintenance:\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update existing maintnence window",
        "description": "- purestorage.flasharray.purefa_maintenance",
        "body": "\n- name: Update existing maintnence window\n  purestorage.flasharray.purefa_maintenance:\n    state: present\n    timeout: 86400\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Configure and enable network interface ct0.eth8",
        "description": "- purestorage.flasharray.purefa_network",
        "body": "\n- name: Configure and enable network interface ct0.eth8\n  purestorage.flasharray.purefa_network:\n    name: ct0.eth8\n    gateway: 10.21.200.1\n    address: 10.21.200.18/24\n    mtu: 9000\n    state: present\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Disable physical interface ct1.eth2",
        "description": "- purestorage.flasharray.purefa_network",
        "body": "\n- name: Disable physical interface ct1.eth2\n  purestorage.flasharray.purefa_network:\n    name: ct1.eth2\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Enable virtual network interface vir0",
        "description": "- purestorage.flasharray.purefa_network",
        "body": "\n- name: Enable virtual network interface vir0\n  purestorage.flasharray.purefa_network:\n    name: vir0\n    state: present\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Remove an IP address from iSCSI interface ct0.eth4",
        "description": "- purestorage.flasharray.purefa_network",
        "body": "\n- name: Remove an IP address from iSCSI interface ct0.eth4\n  purestorage.flasharray.purefa_network:\n    name: ct0.eth4\n    address: 0.0.0.0/0\n    gateway: 0.0.0.0\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Change service list for FC interface ct0.fc1",
        "description": "- purestorage.flasharray.purefa_network",
        "body": "\n- name: Change service list for FC interface ct0.fc1\n  purestorage.flasharray.purefa_network:\n    name: ct0.fc1\n    servicelist:\n    - replication\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Delete exisitng NTP server entries",
        "description": "- purestorage.flasharray.purefa_ntp",
        "body": "\n- name: Delete exisitng NTP server entries\n  purestorage.flasharray.purefa_ntp:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set array NTP servers",
        "description": "- purestorage.flasharray.purefa_ntp",
        "body": "\n- name: Set array NTP servers\n  purestorage.flasharray.purefa_ntp:\n    state: present\n    ntp_servers:\n    - 0.pool.ntp.org\n    - 1.pool.ntp.org\n    - 2.pool.ntp.org\n    - 3.pool.ntp.org\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create NFS offload target",
        "description": "- purestorage.flasharray.purefa_offload",
        "body": "\n- name: Create NFS offload target\n  purestorage.flasharray.purefa_offload:\n    name: nfs-offload\n    protocol: nfs\n    address: 10.21.200.4\n    share: /offload_target\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create S3 offload target",
        "description": "- purestorage.flasharray.purefa_offload",
        "body": "\n- name: Create S3 offload target\n  purestorage.flasharray.purefa_offload:\n    name: s3-offload\n    protocol: s3\n    access_key: 3794fb12c6204e19195f\n    bucket: offload-bucket\n    secret: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n    placement: aws-standard-class\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create Azure offload target",
        "description": "- purestorage.flasharray.purefa_offload",
        "body": "\n- name: Create Azure offload target\n  purestorage.flasharray.purefa_offload:\n    name: azure-offload\n    protocol: azure\n    secret: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n    container: offload-container\n    account: user1\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete offload target",
        "description": "- purestorage.flasharray.purefa_offload",
        "body": "\n- name: Delete offload target\n  purestorage.flasharray.purefa_offload:\n    name: nfs-offload\n    protocol: nfs\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new local protection group",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create new local protection group\n  purestorage.flasharray.purefa_pg:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new protection group called bar in pod called foo",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create new protection group called bar in pod called foo\n  purestorage.flasharray.purefa_pg:\n    name: foo::bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new replicated protection group",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create new replicated protection group\n  purestorage.flasharray.purefa_pg:\n    name: foo\n    target:\n    - arrayb\n    - arrayc\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new replicated protection group to offload target and remote array",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create new replicated protection group to offload target and remote array\n  purestorage.flasharray.purefa_pg:\n    name: foo\n    target:\n    - offload\n    - arrayc\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new protection group with snapshots disabled",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create new protection group with snapshots disabled\n  purestorage.flasharray.purefa_pg:\n    name: foo\n    enabled: false\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete protection group",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Delete protection group\n  purestorage.flasharray.purefa_pg:\n    name: foo\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Eradicate protection group foo on offload target where source array is arrayA",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Eradicate protection group foo on offload target where source array is arrayA\n  purestorage.flasharray.purefa_pg:\n    name: arrayA:foo\n    target: offload\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename protection group foo in pod arrayA to bar",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Rename protection group foo in pod arrayA to bar\n  purestorage.flasharray.purefa_pg:\n    name: arrayA::foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create protection group for hostgroups",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create protection group for hostgroups\n  purestorage.flasharray.purefa_pg:\n    name: bar\n    hostgroup:\n    - hg1\n    - hg2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create protection group for hosts",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create protection group for hosts\n  purestorage.flasharray.purefa_pg:\n    name: bar\n    host:\n    - host1\n    - host2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create replicated protection group for volumes",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Create replicated protection group for volumes\n  purestorage.flasharray.purefa_pg:\n    name: bar\n    volume:\n    - vol1\n    - vol2\n    target: arrayb\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Remove a volume from protection group",
        "description": "- purestorage.flasharray.purefa_pg",
        "body": "\n- name: Remove a volume from protection group\n  purestorage.flasharray.purefa_pg:\n    name: bar\n    volume:\n    - vol1\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update protection group snapshot schedule",
        "description": "- purestorage.flasharray.purefa_pgsched",
        "body": "\n- name: Update protection group snapshot schedule\n  purestorage.flasharray.purefa_pgsched:\n    name: foo\n    schedule: snapshot\n    enabled: true\n    snap_frequency: 86400\n    snap_at: 3PM\n    per_day: 5\n    all_for: 5\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update protection group replication schedule",
        "description": "- purestorage.flasharray.purefa_pgsched",
        "body": "\n- name: Update protection group replication schedule\n  purestorage.flasharray.purefa_pgsched:\n    name: foo\n    schedule: replication\n    enabled: true\n    replicate_frequency: 86400\n    replicate_at: 3PM\n    target_per_day: 5\n    target_all_for: 5\n    blackout_start: 2AM\n    blackout_end: 5AM\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete protection group snapshot schedule",
        "description": "- purestorage.flasharray.purefa_pgsched",
        "body": "\n- name: Delete protection group snapshot schedule\n  purestorage.flasharray.purefa_pgsched:\n    name: foo\n    schedule: snapshot\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete protection group replication schedule",
        "description": "- purestorage.flasharray.purefa_pgsched",
        "body": "\n- name: Delete protection group replication schedule\n  purestorage.flasharray.purefa_pgsched:\n    name: foo\n    schedule: replication\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create protection group snapshot foo.ansible",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Create protection group snapshot foo.ansible\n  purestorage.flasharray.purefa_pgsnap:\n    name: foo\n    suffix: ansible\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Delete and eradicate protection group snapshot named foo.snap",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Delete and eradicate protection group snapshot named foo.snap\n  purestorage.flasharray.purefa_pgsnap:\n    name: foo\n    suffix: snap\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Restore volume data from local protection group snapshot named foo.snap to volume data2",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Restore volume data from local protection group snapshot named foo.snap to\n    volume data2\n  purestorage.flasharray.purefa_pgsnap:\n    name: foo\n    suffix: snap\n    restore: data\n    target: data2\n    overwrite: true\n    with_default_protection: false\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: copy\n"
    },
    {
        "label": "Restore remote protection group snapshot arrayA:pgname.snap.data to local copy",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Restore remote protection group snapshot arrayA:pgname.snap.data to local\n    copy\n  purestorage.flasharray.purefa_pgsnap:\n    name: arrayA:pgname\n    suffix: snap\n    restore: data\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: copy\n"
    },
    {
        "label": "Restore AC pod  protection group snapshot pod1::pgname.snap.data to pod1::data2",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Restore AC pod  protection group snapshot pod1::pgname.snap.data to pod1::data2\n  purestorage.flasharray.purefa_pgsnap:\n    name: pod1::pgname\n    suffix: snap\n    restore: data\n    target: pod1::data2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: copy\n"
    },
    {
        "label": "Create snapshot of existing pgroup foo with suffix and force immeadiate copy to remote targets",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Create snapshot of existing pgroup foo with suffix and force immeadiate copy\n    to remote targets\n  purestorage.flasharray.purefa_pgsnap:\n    name: pgname\n    suffix: force\n    now: true\n    apply_retention: true\n    remote: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete and eradicate snapshot named foo.snap on offload target bar from arrayA",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Delete and eradicate snapshot named foo.snap on offload target bar from arrayA\n  purestorage.flasharray.purefa_pgsnap:\n    name: arrayA:foo\n    suffix: snap\n    offload: bar\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename protection group snapshot foo.fred to foo.dave",
        "description": "- purestorage.flasharray.purefa_pgsnap",
        "body": "\n- name: Rename protection group snapshot foo.fred to foo.dave\n  purestorage.flasharray.purefa_pgsnap:\n    name: foo\n    suffix: fred\n    target: dave\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: rename\n"
    },
    {
        "label": "Enable Phonehome",
        "description": "- purestorage.flasharray.purefa_phonehome",
        "body": "\n- name: Enable Phonehome\n  purestorage.flasharray.purefa_phonehome:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable Phonehome",
        "description": "- purestorage.flasharray.purefa_phonehome",
        "body": "\n- name: Disable Phonehome\n  purestorage.flasharray.purefa_phonehome:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new pod named foo",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Create new pod named foo\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Delete and eradicate pod named foo",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Delete and eradicate pod named foo\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Set failover array for pod named foo",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Set failover array for pod named foo\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    failover:\n    - array1\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set mediator for pod named foo",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Set mediator for pod named foo\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    mediator: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Stretch a pod named foo to array2",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Stretch a pod named foo to array2\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    stretch: array2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Unstretch a pod named foo from array2",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Unstretch a pod named foo from array2\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    stretch: array2\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create clone of pod foo named bar",
        "description": "- purestorage.flasharray.purefa_pod",
        "body": "\n- name: Create clone of pod foo named bar\n  purestorage.flasharray.purefa_pod:\n    name: foo\n    target: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Create new pod replica link from foo to bar on arrayB",
        "description": "- purestorage.flasharray.purefa_pod_replica",
        "body": "\n- name: Create new pod replica link from foo to bar on arrayB\n  purestorage.flasharray.purefa_pod_replica:\n    name: foo\n    target_array: arrayB\n    target_pod: bar\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Pause an pod replica link",
        "description": "- purestorage.flasharray.purefa_pod_replica",
        "body": "\n- name: Pause an pod replica link\n  purestorage.flasharray.purefa_pod_replica:\n    name: foo\n    pause: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete pod replica link",
        "description": "- purestorage.flasharray.purefa_pod_replica",
        "body": "\n- name: Delete pod replica link\n  purestorage.flasharray.purefa_pod_replica:\n    name: foo\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create an NFS policy with initial rule",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Create an NFS policy with initial rule\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: nfs\n    nfs_access: root-squash\n    nfs_permission: ro\n    client: client1\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create an empty NFS policy with no rules",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Create an empty NFS policy with no rules\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: nfs\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create an empty snapshot policy with no rules",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Create an empty snapshot policy with no rules\n  purestorage.flasharray.purefa_policy:\n    name: snap1\n    policy: snapshot\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create an empty snapshot policy with single directory member",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Create an empty snapshot policy with single directory member\n  purestorage.flasharray.purefa_policy:\n    name: snap1\n    policy: snapshot\n    directory: foo:bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable a policy",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Disable a policy\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: nfs\n    enabled: false\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add rule to existing NFS export policy",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Add rule to existing NFS export policy\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: nfs\n    nfs_access: root-squash\n    nfs_permission: ro\n    client: client2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add rule to existing SMB export policy",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Add rule to existing SMB export policy\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: smb\n    smb_encrypt: true\n    smb_anon_allowed: false\n    client: client1\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add non-suffix rule to existing snapshot export policy",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Add non-suffix rule to existing snapshot export policy\n  purestorage.flasharray.purefa_policy:\n    name: snap1\n    policy: snapshot\n    snap_client_name: foo\n    snap_every: 15\n    snap_keep_for: 1440\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add suffix rule to existing snapshot export policy",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Add suffix rule to existing snapshot export policy\n  purestorage.flasharray.purefa_policy:\n    name: snap1\n    policy: snapshot\n    snap_client_name: foo\n    snap_suffix: bar\n    snap_every: 1440\n    snap_keep_for: 1440\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete policy rule for a client",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Delete policy rule for a client\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: nfs\n    client: client2\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete policy",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Delete policy\n  purestorage.flasharray.purefa_policy:\n    name: export1\n    policy: nfs\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create directory quota policy for directory bar",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Create directory quota policy for directory bar\n  purestorage.flasharray.purefa_policy:\n    name: foo\n    directory:\n    - foo:root\n    - bar:bin\n    policy: quota\n    quota_limit: 10G\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete directory quota policy foo",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Delete directory quota policy foo\n  purestorage.flasharray.purefa_policy:\n    name: foo\n    policy: quota\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create empty directory quota policy foo",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Create empty directory quota policy foo\n  purestorage.flasharray.purefa_policy:\n    name: foo\n    policy: quota\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Detach directory \"foo:bar\" from quota policy quota1",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Detach directory \"foo:bar\" from quota policy quota1\n  purestorage.flasharray.purefa_policy:\n    name: quota1\n    directory:\n    - foo:bar\n    state: absent\n    policy: quota\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Remove quota rule from quota policy foo",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Remove quota rule from quota policy foo\n  purestorage.flasharray.purefa_policy:\n    name: foo\n    policy: quota\n    quota_limit: 10G\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update password police management",
        "description": "- purestorage.flasharray.purefa_policy",
        "body": "\n- name: Update password police management\n  purestorage.flasharray.purefa_policy:\n    name: management\n    policy: password\n    max_login_attempts: 5\n    enforce_username_check: true\n    enforce_dictopnary_check: true\n    min_password_length: 5\n    password_history: 2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng proxy settings",
        "description": "- purestorage.flasharray.purefa_proxy",
        "body": "\n- name: Delete exisitng proxy settings\n  purestorage.flasharray.purefa_proxy:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set proxy settings",
        "description": "- purestorage.flasharray.purefa_proxy",
        "body": "\n- name: Set proxy settings\n  purestorage.flasharray.purefa_proxy:\n    host: purestorage.com\n    port: 8080\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable Remote Assist port",
        "description": "- purestorage.flasharray.purefa_ra",
        "body": "\n- name: Enable Remote Assist port\n  purestorage.flasharray.purefa_ra:\n    duration: 12\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n  register: result\n  debug:\n    msg: 'Remote Assist: {{ result[''ra_info''] }}'\n"
    },
    {
        "label": "Disable Remote Assist port",
        "description": "- purestorage.flasharray.purefa_ra",
        "body": "\n- name: Disable Remote Assist port\n  purestorage.flasharray.purefa_ra:\n    state: disable\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new realm",
        "description": "- purestorage.flasharray.purefa_realm",
        "body": "\n- name: Create new realm\n  purestorage.flasharray.purefa_realm:\n    name: foo\n    bw_qos: 50M\n    iops_qos: 100\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update realm QoS limits",
        "description": "- purestorage.flasharray.purefa_realm",
        "body": "\n- name: Update realm QoS limits\n  purestorage.flasharray.purefa_realm:\n    name: foo\n    bw_qos: 0\n    iops_qos: 5555\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Destroy realm",
        "description": "- purestorage.flasharray.purefa_realm",
        "body": "\n- name: Destroy realm\n  purestorage.flasharray.purefa_realm:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Recover deleted realm",
        "description": "- purestorage.flasharray.purefa_realm",
        "body": "\n- name: Recover deleted realm\n  purestorage.flasharray.purefa_realm:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Destroy and Eradicate realm",
        "description": "- purestorage.flasharray.purefa_realm",
        "body": "\n- name: Destroy and Eradicate realm\n  purestorage.flasharray.purefa_realm:\n    name: foo\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename realm foo to bar",
        "description": "- purestorage.flasharray.purefa_realm",
        "body": "\n- name: Rename realm foo to bar\n  purestorage.flasharray.purefa_realm:\n    name: foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create (disabled) SAML2 SSO with only metadata URL",
        "description": "- purestorage.flasharray.purefa_saml",
        "body": "\n- name: Create (disabled) SAML2 SSO with only metadata URL\n  purestorage.flasharray.purefa_saml:\n    name: myIDP\n    array_url: https://10.10.10.2\n    metadata_url: https://myidp.acme.com/adfs/ls\n    x509_cert: '{{lookup(''file'', ''x509_cert_file'') }}'\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable SAML2 SSO",
        "description": "- purestorage.flasharray.purefa_saml",
        "body": "\n- name: Enable SAML2 SSO\n  purestorage.flasharray.purefa_saml:\n    name: myISO\n    enabled: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete SAML2 SSO",
        "description": "- purestorage.flasharray.purefa_saml",
        "body": "\n- name: Delete SAML2 SSO\n  purestorage.flasharray.purefa_saml:\n    state: absent\n    name: myIDP\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable SMI-S and SLP",
        "description": "- purestorage.flasharray.purefa_smis",
        "body": "\n- name: Enable SMI-S and SLP\n  purestorage.flasharray.purefa_smis:\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable SMI-S and SLP",
        "description": "- purestorage.flasharray.purefa_smis",
        "body": "\n- name: Disable SMI-S and SLP\n  purestorage.flasharray.purefa_smis:\n    smis: false\n    slp: false\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng SMTP settings",
        "description": "- purestorage.flasharray.purefa_smtp",
        "body": "\n- name: Delete exisitng SMTP settings\n  purestorage.flasharray.purefa_smtp:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set SMTP settings",
        "description": "- purestorage.flasharray.purefa_smtp",
        "body": "\n- name: Set SMTP settings\n  purestorage.flasharray.purefa_smtp:\n    sender_domain: purestorage.com\n    password: account_password\n    user: smtp_account\n    sender: array_email\n    body_prefix: SMTP-Body\n    subject_prefix: SMTP\n    relay_host: 10.2.56.78:2345\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create snapshot foo.ansible",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Create snapshot foo.ansible\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    suffix: ansible\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Create R/W clone foo_clone from snapshot foo.snap",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Create R/W clone foo_clone from snapshot foo.snap\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    suffix: snap\n    target: foo_clone\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: copy\n"
    },
    {
        "label": "Create R/W clone foo_clone from remote mnapshot arrayB:foo.snap",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Create R/W clone foo_clone from remote mnapshot arrayB:foo.snap\n  purestorage.flasharray.purefa_snap:\n    name: arrayB:foo\n    suffix: snap\n    target: foo_clone\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: copy\n"
    },
    {
        "label": "Overwrite existing volume foo_clone with snapshot foo.snap",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Overwrite existing volume foo_clone with snapshot foo.snap\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    suffix: snap\n    target: foo_clone\n    overwrite: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: copy\n"
    },
    {
        "label": "Delete and eradicate snapshot named foo.snap",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Delete and eradicate snapshot named foo.snap\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    suffix: snap\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename snapshot foo.fred to foo.dave",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Rename snapshot foo.fred to foo.dave\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    suffix: fred\n    target: dave\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: rename\n"
    },
    {
        "label": "Create a remote volume snapshot on offload device arrayB",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Create a remote volume snapshot on offload device arrayB\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    offload: arrayB\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete and eradicate a volume snapshot foo.1 on offload device arrayB",
        "description": "- purestorage.flasharray.purefa_snap",
        "body": "\n- name: Delete and eradicate a volume snapshot foo.1 on offload device arrayB\n  purestorage.flasharray.purefa_snap:\n    name: foo\n    suffix: 1\n    offload: arrayB\n    eradicate: true\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete exisitng SNMP manager",
        "description": "- purestorage.flasharray.purefa_snmp",
        "body": "\n- name: Delete exisitng SNMP manager\n  purestorage.flasharray.purefa_snmp:\n    name: manager1\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update existing SNMP manager",
        "description": "- purestorage.flasharray.purefa_snmp",
        "body": "\n- name: Update existing SNMP manager\n  purestorage.flasharray.purefa_snmp:\n    name: manager1\n    community: private\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Clear SNMP agent v2c community string",
        "description": "- purestorage.flasharray.purefa_snmp_agent",
        "body": "\n- name: Clear SNMP agent v2c community string\n  purestorage.flasharray.purefa_snmp_agent:\n    version: v2c\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Clear SNMP agent v3 auth and privacy protocols",
        "description": "- purestorage.flasharray.purefa_snmp_agent",
        "body": "\n- name: Clear SNMP agent v3 auth and privacy protocols\n  purestorage.flasharray.purefa_snmp_agent:\n    version: v3\n    user: admin\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update v2c SNMP agent",
        "description": "- purestorage.flasharray.purefa_snmp_agent",
        "body": "\n- name: Update v2c SNMP agent\n  purestorage.flasharray.purefa_snmp_agent:\n    version: v2c\n    community: public\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update v3 SNMP manager",
        "description": "- purestorage.flasharray.purefa_snmp_agent",
        "body": "\n- name: Update v3 SNMP manager\n  purestorage.flasharray.purefa_snmp_agent:\n    version: v3\n    user: admin\n    auth_protocol: MD5\n    auth_passphrase: password\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Enable SSO",
        "description": "- purestorage.flasharray.purefa_sso",
        "body": "\n- name: Enable SSO\n  purestorage.flasharray.purefa_sso:\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable SSO",
        "description": "- purestorage.flasharray.purefa_sso",
        "body": "\n- name: Disable SSO\n  purestorage.flasharray.purefa_sso:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create subnet subnet100",
        "description": "- purestorage.flasharray.purefa_subnet",
        "body": "\n- name: Create subnet subnet100\n  purestorage.flasharray.purefa_subnet:\n    name: subnet100\n    vlan: 100\n    gateway: 10.21.200.1\n    prefix: 10.21.200.0/24\n    mtu: 9000\n    state: present\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Disable subnet subnet100",
        "description": "- purestorage.flasharray.purefa_subnet",
        "body": "\n- name: Disable subnet subnet100\n  purestorage.flasharray.purefa_subnet:\n    name: subnet100\n    enabled: false\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Delete subnet subnet100",
        "description": "- purestorage.flasharray.purefa_subnet",
        "body": "\n- name: Delete subnet subnet100\n  purestorage.flasharray.purefa_subnet:\n    name: subnet100\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Delete existing syslog server entry",
        "description": "- purestorage.flasharray.purefa_syslog",
        "body": "\n- name: Delete existing syslog server entry\n  purestorage.flasharray.purefa_syslog:\n    name: syslog1\n    address: syslog1.com\n    protocol: tcp\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Add syslog server entry",
        "description": "- purestorage.flasharray.purefa_syslog",
        "body": "\n- name: Add syslog server entry\n  purestorage.flasharray.purefa_syslog:\n    name: syslog1\n    address: syslog1.com\n    port: 8081\n    protocol: udp\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update syslog server entry",
        "description": "- purestorage.flasharray.purefa_syslog",
        "body": "\n- name: Update syslog server entry\n  purestorage.flasharray.purefa_syslog:\n    name: syslog1\n    address: syslog1.com\n    port: 8081\n    protocol: tcp\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Change syslog servers settings",
        "description": "- purestorage.flasharray.purefa_syslog_settings",
        "body": "\n- name: Change syslog servers settings\n  purestorage.flasharray.purefa_syslog_settings:\n    tls_audit: false\n    severity: debug\n    ca_certificate: '{{lookup(''file'', ''example.crt'') }}'\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Delete existing CA certifcate for syslog servers settings",
        "description": "- purestorage.flasharray.purefa_syslog_settings",
        "body": "\n- name: Delete existing CA certifcate for syslog servers settings\n  purestorage.flasharray.purefa_syslog_settings:\n    ca_certificate: DELETE\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Set GUI idle timeout to 25 minutes",
        "description": "- purestorage.flasharray.purefa_timeout",
        "body": "\n- name: Set GUI idle timeout to 25 minutes\n  purestorage.flasharray.purefa_timeout:\n    timeout: 25\n    state: present\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable idle timeout",
        "description": "- purestorage.flasharray.purefa_timeout",
        "body": "\n- name: Disable idle timeout\n  purestorage.flasharray.purefa_timeout:\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new user ansible with API token",
        "description": "- purestorage.flasharray.purefa_user",
        "body": "\n- name: Create new user ansible with API token\n  purestorage.flasharray.purefa_user:\n    name: ansible\n    password: apassword\n    role: storage_admin\n    api: true\n    timeout: 2d\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n  register: result\n  debug:\n    msg: 'API Token: {{ result[''user_info''][''user_api''] }}'\n"
    },
    {
        "label": "Overwrite/add SSH public key for existing user",
        "description": "- purestorage.flasharray.purefa_user",
        "body": "\n- name: Overwrite/add SSH public key for existing user\n  purestorage.flasharray.purefa_user:\n    name: ansible\n    role: array_admin\n    public_key: '{{lookup(''file'', ''id_rsa.pub'') }}'\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Remove existing SSH public key from user",
        "description": "- purestorage.flasharray.purefa_user",
        "body": "\n- name: Remove existing SSH public key from user\n  purestorage.flasharray.purefa_user:\n    name: ansible\n    role: array_admin\n    public_key: ''\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Change role type for existing user",
        "description": "- purestorage.flasharray.purefa_user",
        "body": "\n- name: Change role type for existing user\n  purestorage.flasharray.purefa_user:\n    name: ansible\n    role: array_admin\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Change password type for existing user (NOT IDEMPOTENT)",
        "description": "- purestorage.flasharray.purefa_user",
        "body": "\n- name: Change password type for existing user (NOT IDEMPOTENT)\n  purestorage.flasharray.purefa_user:\n    name: ansible\n    password: anewpassword\n    old_password: apassword\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Change API token and token timeout for existing user",
        "description": "- purestorage.flasharray.purefa_user",
        "body": "\n- name: Change API token and token timeout for existing user\n  purestorage.flasharray.purefa_user:\n    name: ansible\n    api: true\n    role: array_admin\n    timeout: 1d\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n  register: result\n  debug:\n    msg: 'API Token: {{ result[''user_info''][''user_api''] }}'\n"
    },
    {
        "label": "Create new volume group",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Create new volume group\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    bw_qos: 50M\n    iops_qos: 100\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create 10 volume groups of pattern foo#bar with QoS",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Create 10 volume groups of pattern foo#bar with QoS\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    suffix: bar\n    count: 10\n    start: 10\n    digits: 3\n    bw_qos: 50M\n    iops_qos: 100\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update volume group QoS limits",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Update volume group QoS limits\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    bw_qos: 0\n    iops_qos: 5555\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Update volume group DMM Priority Adjustment (Purity//FA 6.1.2+)",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Update volume group DMM Priority Adjustment (Purity//FA 6.1.2+)\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    priority_operator: '-'\n    priority_value: 10\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Destroy volume group",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Destroy volume group\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Recover deleted volume group - no changes are made to the volume group on recovery",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Recover deleted volume group - no changes are made to the volume group on\n    recovery\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Destroy and Eradicate volume group",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Destroy and Eradicate volume group\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Rename volume group foo to bar",
        "description": "- purestorage.flasharray.purefa_vg",
        "body": "\n- name: Rename volume group foo to bar\n  purestorage.flasharray.purefa_vg:\n    name: foo\n    rename: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Configure and enable VLAN interface ct0.eth8 for subnet test",
        "description": "- purestorage.flasharray.purefa_vlan",
        "body": "\n- name: Configure and enable VLAN interface ct0.eth8 for subnet test\n  purestorage.flasharray.purefa_vlan:\n    name: ct0.eth8\n    subnet: test\n    address: 10.21.200.18\n    state: present\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Disable VLAN interface for subnet test on ct1.eth2",
        "description": "- purestorage.flasharray.purefa_vlan",
        "body": "\n- name: Disable VLAN interface for subnet test on ct1.eth2\n  purestorage.flasharray.purefa_vlan:\n    name: ct1.eth2\n    subnet: test\n    enabled: false\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Delete VLAN inteface for subnet test on ct0.eth4",
        "description": "- purestorage.flasharray.purefa_vlan",
        "body": "\n- name: Delete VLAN inteface for subnet test on ct0.eth4\n  purestorage.flasharray.purefa_vlan:\n    name: ct0.eth4\n    subnet: test\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: c6033033-fe69-2515-a9e8-966bb7fe4b40\n"
    },
    {
        "label": "Enable VNC for application test",
        "description": "- purestorage.flasharray.purefa_vnc",
        "body": "\n- name: Enable VNC for application test\n  purestorage.flasharray.purefa_vnc:\n    name: test\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Disable VNC for application test",
        "description": "- purestorage.flasharray.purefa_vnc",
        "body": "\n- name: Disable VNC for application test\n  purestorage.flasharray.purefa_vnc:\n    name: test\n    state: absent\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new volume named foo with a QoS limit",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Create new volume named foo with a QoS limit\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    size: 1T\n    bw_qos: 58M\n    iops_qos: 23K\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Create new volume named foo with a DMM priority (Purity//FA 6.1.2+)",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Create new volume named foo with a DMM priority (Purity//FA 6.1.2+)\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    size: 1T\n    priority_operator: +\n    priorty_value: 10\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Create new volume named foo in protection group pg1 (this cannot be used with context)",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Create new volume named foo in protection group pg1 (this cannot be used with\n    context)\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    pgroup: pg1\n    size: 1T\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Create 10 volumes with index starting at 10 but padded with 3 digits",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Create 10 volumes with index starting at 10 but padded with 3 digits\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    size: 1T\n    suffix: bar\n    count: 10\n    start: 10\n    digits: 3\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Extend the size of an existing volume named foo",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Extend the size of an existing volume named foo\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    size: 2T\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Delete and eradicate volume named foo",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Delete and eradicate volume named foo\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    eradicate: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Create clone of volume bar named foo",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Create clone of volume bar named foo\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    target: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Overwrite volume bar with volume foo",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Overwrite volume bar with volume foo\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    target: bar\n    overwrite: true\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Clear volume QoS from volume foo",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Clear volume QoS from volume foo\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    bw_qos: 0\n    iops_qos: 0\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    },
    {
        "label": "Move local volume foo from local array to pod bar",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Move local volume foo from local array to pod bar\n  purestorage.flasharray.purefa_volume:\n    name: foo\n    move: bar\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Move volume foo in pod bar to local array",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Move volume foo in pod bar to local array\n  purestorage.flasharray.purefa_volume:\n    name: bar::foo\n    move: local\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Move volume foo in pod bar to vgroup fin",
        "description": "- purestorage.flasharray.purefa_volume",
        "body": "\n- name: Move volume foo in pod bar to vgroup fin\n  purestorage.flasharray.purefa_volume:\n    name: bar::foo\n    move: fin\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Create new tags in namespace test for volume foo",
        "description": "- purestorage.flasharray.purefa_volume_tags",
        "body": "\n- name: Create new tags in namespace test for volume foo\n  purestorage.flasharray.purefa_volume_tags:\n    name: foo\n    namespace: test\n    copyable: false\n    kvp:\n    - key1:value1\n    - key2:value2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n"
    },
    {
        "label": "Remove an existing tag in namespace test for volume foo",
        "description": "- purestorage.flasharray.purefa_volume_tags",
        "body": "\n- name: Remove an existing tag in namespace test for volume foo\n  purestorage.flasharray.purefa_volume_tags:\n    name: foo\n    namespace: test\n    kvp:\n    - key1:value1\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: absent\n"
    },
    {
        "label": "Update an existing tag in namespace test for volume foo",
        "description": "- purestorage.flasharray.purefa_volume_tags",
        "body": "\n- name: Update an existing tag in namespace test for volume foo\n  purestorage.flasharray.purefa_volume_tags:\n    name: foo\n    namespace: test\n    kvp:\n    - key1:value2\n    fa_url: 10.10.10.2\n    api_token: e31060a7-21fc-e277-6240-25983c6c4592\n    state: present\n"
    }
]