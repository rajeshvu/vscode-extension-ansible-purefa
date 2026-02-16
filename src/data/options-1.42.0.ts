import { ModuleOptions } from "./options";

export const options_1_42_0: ModuleOptions = {
    "purestorage.flasharray.purefa_ad": {
        "name": {
            "description": [
                "Name of the AD account"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the AD sccount is deleted or not"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "computer": {
            "description": [
                "The common name of the computer account to be created in the Active Directory domain.",
                "If not specified, defaults to the name of the Active Directory configuration."
            ],
            "type": "str"
        },
        "domain": {
            "description": [
                "The Active Directory domain to join"
            ],
            "type": "str"
        },
        "username": {
            "description": [
                "A user capable of creating a computer account within the domain"
            ],
            "type": "str"
        },
        "password": {
            "description": [
                "Password string for I(username)"
            ],
            "type": "str"
        },
        "directory_servers": {
            "description": [
                "A list of directory servers that will be used for lookups related to user authorization",
                "Accepted server formats are IP address and DNS name",
                "All specified servers must be registered to the domain appropriately in the array configured DNS and are only communicated with over the secure LDAP (LDAPS) protocol. If not specified, servers are resolved for the domain in DNS",
                "The specified list can have a maximum length of 1, or 3 for Purity 6.1.6 or higher. If more are provided only the first allowed count used."
            ],
            "type": "list",
            "elements": "str"
        },
        "kerberos_servers": {
            "description": [
                "A list of key distribution servers to use for Kerberos protocol",
                "Accepted server formats are IP address and DNS name",
                "All specified servers must be registered to the domain appropriately in the array configured DNS and are only communicated with over the secure LDAP (LDAPS) protocol. If not specified, servers are resolved for the domain in DNS.",
                "The specified list can have a maximum length of 1, or 3 for Purity 6.1.6 or higher. If more are provided only the first allowed count used."
            ],
            "type": "list",
            "elements": "str"
        },
        "local_only": {
            "description": [
                "Do a local-only delete of an active directory account"
            ],
            "type": "bool",
            "default": false
        },
        "join_ou": {
            "description": [
                "Distinguished name of organization unit in which the computer account should be created when joining the domain. e.g. OU=Arrays,OU=Storage.",
                "The B(DC=...) components can be omitted.",
                "If left empty, defaults to B(CN=Computers).",
                "Requires Purity//FA 6.1.8 or higher"
            ],
            "type": "str",
            "version_added": "1.10.0"
        },
        "tls": {
            "description": [
                "TLS mode for communication with domain controllers."
            ],
            "type": "str",
            "choices": [
                "required",
                "optional"
            ],
            "default": "required",
            "version_added": "1.14.0"
        },
        "join_existing": {
            "description": [
                "If specified as I(true), the domain is searched for a pre-existing computer account to join to, and no new account will be created within the domain. The C(username) specified when joining a pre-existing account must have permissions to 'read all properties from' and 'reset the password of' the pre-existing account. C(join_ou) will be read from the pre-existing account and cannot be specified when joining to an existing account"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.14.0"
        }
    },
    "purestorage.flasharray.purefa_admin": {
        "sso": {
            "description": [
                "Enable or disable the array Single Sign-On from Pure1 Manage"
            ],
            "default": false,
            "type": "bool"
        },
        "max_login": {
            "description": [
                "Maximum number of failed logins before account is locked"
            ],
            "type": "int"
        },
        "min_password": {
            "description": [
                "Minimum user password length"
            ],
            "default": 1,
            "type": "int"
        },
        "lockout": {
            "description": [
                "Account lockout duration, in seconds, after max_login exceeded",
                "Range between 1 second and 90 days (7776000 seconds)"
            ],
            "type": "int"
        }
    },
    "purestorage.flasharray.purefa_alert": {
        "state": {
            "type": "str",
            "description": [
                "Create, delete or test alert email"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "test"
            ]
        },
        "address": {
            "type": "str",
            "description": [
                "Email address (valid format required)"
            ],
            "required": true
        },
        "enabled": {
            "type": "bool",
            "default": true,
            "description": [
                "Set specified email address to be enabled or disabled"
            ]
        }
    },
    "purestorage.flasharray.purefa_apiclient": {
        "name": {
            "description": [
                "Name of the API Client"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the API client should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "role": {
            "description": [
                "The maximum role allowed for ID Tokens issued by this API client"
            ],
            "type": "str",
            "choices": [
                "readonly",
                "ops_admin",
                "storage_admin",
                "array_admin"
            ]
        },
        "issuer": {
            "description": [
                "The name of the identity provider that will be issuing ID Tokens for this API client",
                "If not specified, defaults to the API client name, I(name)."
            ],
            "type": "str"
        },
        "public_key": {
            "description": [
                "The API clients PEM formatted (Base64 encoded) RSA public key.",
                "Include the I(\u2014\u2013BEGIN PUBLIC KEY\u2014\u2013) and I(\u2014\u2013END PUBLIC KEY\u2014\u2013) lines"
            ],
            "type": "str"
        },
        "token_ttl": {
            "description": [
                "Time To Live length in seconds for the exchanged access token",
                "Range is 1 second to 1 day (86400 seconds)"
            ],
            "type": "int",
            "default": 86400
        },
        "enabled": {
            "description": [
                "State of the API Client Key"
            ],
            "type": "bool",
            "default": true
        }
    },
    "purestorage.flasharray.purefa_arrayname": {
        "state": {
            "description": [
                "Set the array name"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "present"
            ]
        },
        "name": {
            "description": [
                "Name of the array. Must conform to correct naming schema."
            ],
            "type": "str",
            "required": true
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_audits": {
        "start": {
            "description": [
                "Start date and time (based on array local time)",
                "If not provided epoch is assumed",
                "Expected format \"YYYY-MM-DD hh:mm:ss\""
            ],
            "type": "str"
        },
        "timezone": {
            "description": [
                "The timezone of the FlashArray",
                "If not provided, the module will attempt to get the current local timezone from the server however from Purity//FA 6.5.3 this value will calculated automatically from the FlashArray"
            ],
            "type": "str"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_banner": {
        "state": {
            "description": [
                "Set or delete the MOTD"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "present",
                "absent"
            ]
        },
        "banner": {
            "description": [
                "Banner text, or MOTD, to use"
            ],
            "type": "str",
            "default": "Welcome to the machine..."
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_cbsexpand": {
        "state": {
            "description": [
                "Action to be performed on the CBS array.",
                "I{list) will provide the options that I(capacity), in bytes, can be set to."
            ],
            "default": "show",
            "choices": [
                "show",
                "expand"
            ],
            "type": "str"
        },
        "capacity": {
            "description": [
                "Requested capacity of CBS array in bytes."
            ],
            "type": "int"
        }
    },
    "purestorage.flasharray.purefa_certs": {
        "name": {
            "description": [
                "Name of the SSL Certificate"
            ],
            "type": "str",
            "default": "management"
        },
        "state": {
            "description": [
                "Action for the module to perform",
                "I(present) will create or re-create an SSL certificate",
                "I(absent) will delete an existing SSL certificate",
                "I(sign) will construct a Certificate Signing request (CSR)",
                "I(export) will export the existing SSL certificate",
                "I(import) will import a CA provided certificate."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "import",
                "export",
                "sign"
            ],
            "type": "str"
        },
        "country": {
            "type": "str",
            "description": [
                "The two-letter ISO code for the country where your organization is located"
            ]
        },
        "province": {
            "type": "str",
            "description": [
                "The full name of the state or province where your organization is located"
            ]
        },
        "locality": {
            "type": "str",
            "description": [
                "The full name of the city where your organization is located"
            ]
        },
        "organization": {
            "type": "str",
            "description": [
                "The full and exact legal name of your organization.",
                "The organization name should not be abbreviated and should include suffixes such as Inc, Corp, or LLC."
            ]
        },
        "org_unit": {
            "type": "str",
            "description": [
                "The department within your organization that is managing the certificate"
            ]
        },
        "common_name": {
            "type": "str",
            "description": [
                "The fully qualified domain name (FQDN) of the current array",
                "For example, the common name for https://purearray.example.com is purearray.example.com, or *.example.com for a wildcard certificate",
                "This can also be the management IP address of the array or the shortname of the current array.",
                "Maximum of 64 characters",
                "If not provided this will default to the shortname of the array"
            ]
        },
        "email": {
            "type": "str",
            "description": [
                "The email address used to contact your organization"
            ]
        },
        "key_size": {
            "type": "int",
            "description": [
                "The key size in bits if you generate a new private key"
            ],
            "default": 2048,
            "choices": [
                1024,
                2048,
                4096
            ]
        },
        "days": {
            "default": 3650,
            "type": "int",
            "description": [
                "The number of valid days for the self-signed certificate being generated",
                "If not specified, the self-signed certificate expires after 3650 days."
            ]
        },
        "generate": {
            "default": false,
            "type": "bool",
            "description": [
                "Generate a new private key.",
                "If not selected, the certificate will use the existing key"
            ]
        },
        "certificate": {
            "type": "str",
            "description": [
                "Required for I(import)",
                "A valid signed certificate in PEM format (Base64 encoded)",
                "Includes the \"-----BEGIN CERTIFICATE-----\" and \"-----END CERTIFICATE-----\" lines"
            ]
        },
        "intermeadiate_cert": {
            "type": "str",
            "description": [
                "Intermeadiate certificate provided by the CA"
            ]
        },
        "key": {
            "type": "str",
            "description": [
                "If the Certificate Signed Request (CSR) was not constructed on the array or the private key has changed since construction the CSR, provide a new private key here"
            ]
        },
        "passphrase": {
            "type": "str",
            "description": [
                "Passphrase if the private key is encrypted"
            ]
        },
        "export_file": {
            "type": "str",
            "description": [
                "Name of file to contain Certificate Signing Request when `status sign`",
                "Name of file to export the current SSL Certificate when `status export`",
                "File will be overwritten if it already exists"
            ]
        }
    },
    "purestorage.flasharray.purefa_connect": {
        "state": {
            "description": [
                "Create or delete array connection"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        },
        "target_url": {
            "description": [
                "Management IP address of remote array."
            ],
            "type": "str",
            "required": true
        },
        "target_api": {
            "description": [
                "API token for target array"
            ],
            "type": "str"
        },
        "connection": {
            "description": [
                "Type of connection between arrays."
            ],
            "type": "str",
            "choices": [
                "sync",
                "async"
            ],
            "default": "async"
        },
        "transport": {
            "description": [
                "Type of transport protocol to use for replication"
            ],
            "type": "str",
            "choices": [
                "ip",
                "fc"
            ],
            "default": "ip"
        },
        "encrypted": {
            "description": [
                "Defines if the array connection will be encrypted"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.30.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        },
        "renew_key": {
            "description": [
                "Update array connection with a new encryption key.",
                "If set to true, other array connection attributes will not be modified."
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.40.0"
        },
        "refresh": {
            "description": [
                "Array will attempt to communicate with the connection peer in order to update the connection attributes on both arrays with any changes that have occurred.",
                "If set to true, other array connection attributes will not be modified."
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.40.0"
        }
    },
    "purestorage.flasharray.purefa_console": {
        "state": {
            "description": [
                "Define state of console lockout",
                "When set to I(enable) the console port is locked from root login."
            ],
            "type": "str",
            "default": "disable",
            "choices": [
                "enable",
                "disable"
            ]
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_default_protection": {
        "scope": {
            "description": [
                "The scope of the default protection group"
            ],
            "type": "str",
            "choices": [
                "array",
                "pod"
            ],
            "default": "array"
        },
        "name": {
            "description": [
                "The name of the protection group to assign or remove as default for the scope.",
                "If I(scope) is I(pod) only the short-name for the pod protection group is needed. See examples"
            ],
            "elements": "str",
            "type": "list",
            "required": true
        },
        "pod": {
            "description": [
                "name of the pod to apply the default protection to.",
                "Only required for I(scope) is I(pod)"
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether to add or delete the protection group to the default list"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.37.0"
        }
    },
    "purestorage.flasharray.purefa_directory": {
        "name": {
            "description": [
                "Name of the directory"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the directory should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "filesystem": {
            "description": [
                "Name of the filesystem the directory links to."
            ],
            "type": "str",
            "required": true
        },
        "path": {
            "description": [
                "Path of the managed directory in the file system",
                "If not provided will default to I(name)"
            ],
            "type": "str"
        },
        "rename": {
            "description": [
                "Value to rename the specified directory to"
            ],
            "type": "str"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_dirsnap": {
        "name": {
            "description": [
                "Name of the directory to snapshot"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the directory snapshot should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "filesystem": {
            "description": [
                "Name of the filesystem the directory links to."
            ],
            "type": "str",
            "required": true
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the snapshot on delete or leave in trash"
            ],
            "type": "bool",
            "default": false
        },
        "client": {
            "description": [
                "The client name portion of the client visible snapshot name"
            ],
            "type": "str",
            "required": true
        },
        "suffix": {
            "description": [
                "Snapshot suffix to use"
            ],
            "type": "str"
        },
        "new_client": {
            "description": [
                "The new client name when performing a rename"
            ],
            "type": "str",
            "version_added": "1.12.0"
        },
        "new_suffix": {
            "description": [
                "The new suffix when performing a rename"
            ],
            "type": "str",
            "version_added": "1.12.0"
        },
        "rename": {
            "description": [
                "Whether to rename a directory snapshot",
                "The snapshot client name and suffix can be changed",
                "Required with I(new_client) and I(new_suffix)"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.12.0"
        },
        "keep_for": {
            "description": [
                "Retention period, after which snapshots will be eradicated",
                "Specify in seconds. Range 300 - 31536000 (5 minutes to 1 year)",
                "Value of 0 will set no retention period.",
                "If not specified on create will default to 0 (no retention period)"
            ],
            "type": "int"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_dns": {
        "name": {
            "description": [
                "Name of the DNS configuration.",
                "Default value only supported for management service"
            ],
            "default": "management",
            "type": "str",
            "version_added": "1.14.0"
        },
        "state": {
            "description": [
                "Set or delete directory service configuration"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        },
        "domain": {
            "description": [
                "Domain suffix to be appended when perofrming DNS lookups."
            ],
            "type": "str"
        },
        "nameservers": {
            "description": [
                "List of up to 3 unique DNS server IP addresses. These can be IPv4 or IPv6 - No validation is done of the addresses is performed."
            ],
            "type": "list",
            "elements": "str"
        },
        "service": {
            "description": [
                "Type of service the DNS will work with"
            ],
            "type": "str",
            "version_added": "1.14.0",
            "choices": [
                "management",
                "file"
            ],
            "default": "management"
        },
        "source": {
            "description": [
                "A virtual network interface (vif)"
            ],
            "type": "str",
            "version_added": "1.14.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.40.0"
        }
    },
    "purestorage.flasharray.purefa_ds": {
        "state": {
            "type": "str",
            "description": [
                "Create, delete or test directory service configuration"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "test"
            ]
        },
        "enable": {
            "description": [
                "Whether to enable or disable directory service support."
            ],
            "default": false,
            "type": "bool"
        },
        "dstype": {
            "description": [
                "The type of directory service to work on"
            ],
            "choices": [
                "management",
                "data"
            ],
            "type": "str",
            "default": "management"
        },
        "uri": {
            "type": "list",
            "elements": "str",
            "description": [
                "A list of up to 30 URIs of the directory servers. Each URI must include the scheme ldap:// or ldaps:// (for LDAP over SSL), a hostname, and a domain name or IP address. For example, ldap://ad.company.com configures the directory service with the hostname \"ad\" in the domain \"company.com\" while specifying the unencrypted LDAP protocol."
            ]
        },
        "base_dn": {
            "type": "str",
            "description": [
                "Sets the base of the Distinguished Name (DN) of the directory service groups. The base should consist of only Domain Components (DCs). The base_dn will populate with a default value when a URI is entered by parsing domain components from the URI. The base DN should specify DC= for each domain component and multiple DCs should be separated by commas."
            ]
        },
        "bind_password": {
            "type": "str",
            "description": [
                "Sets the password of the bind_user user name account."
            ]
        },
        "force_bind_password": {
            "type": "bool",
            "default": true,
            "description": [
                "Will force the bind password to be reset even if the bind user password is unchanged.",
                "If set to I(false) and I(bind_user) is unchanged the password will not be reset."
            ],
            "version_added": "1.14.0"
        },
        "bind_user": {
            "type": "str",
            "description": [
                "Sets the user name that can be used to bind to and query the directory.",
                "For Active Directory, enter the username - often referred to as sAMAccountName or User Logon Name - of the account that is used to perform directory lookups.",
                "For OpenLDAP, enter the full DN of the user."
            ]
        },
        "user_login": {
            "type": "str",
            "description": [
                "User login attribute in the structure of the configured LDAP servers. Typically the attribute field that holds the users unique login name. Default value is I(sAMAccountName) for Active Directory or I(uid) for all other directory services"
            ]
        },
        "user_object": {
            "type": "str",
            "description": [
                "Value of the object class for a management LDAP user. Defaults to I(User) for Active Directory servers, I(posixAccount) or I(shadowAccount) for OpenLDAP servers dependent on the group type of the server, or person for all other directory servers."
            ]
        },
        "check_peer": {
            "type": "bool",
            "description": [
                "Whether or not server authenticity is enforced when a certificate is provided"
            ],
            "default": false,
            "version_added": "1.24.0"
        },
        "certificate": {
            "type": "str",
            "description": [
                "The certificate of the Certificate Authority (CA) that signed the certificates of the directory servers, which is used to validate the authenticity of the configured servers",
                "A valid signed certificate in PEM format (Base64 encoded)",
                "Includes the \"-----BEGIN CERTIFICATE-----\" and \"-----END CERTIFICATE-----\" lines"
            ],
            "version_added": "1.24.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_dsrole": {
        "name": {
            "description": [
                "Name of role",
                "If not providied, will be assigned to the same as I(role)"
            ],
            "type": "str",
            "version_added": "1.32.0"
        },
        "state": {
            "description": [
                "Create or delete directory service role"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "role": {
            "description": [
                "The directory service role to work on"
            ],
            "type": "str",
            "choices": [
                "array_admin",
                "ops_admin",
                "readonly",
                "storage_admin"
            ]
        },
        "group_base": {
            "type": "str",
            "description": [
                "Specifies where the configured group is located in the directory tree. This field consists of Organizational Units (OUs) that combine with the base DN attribute and the configured group CNs to complete the full Distinguished Name of the groups. The group base should specify OU= for each OU and multiple OUs should be separated by commas. The order of OUs is important and should get larger in scope from left to right.",
                "Each OU should not exceed 64 characters in length."
            ]
        },
        "group": {
            "type": "str",
            "description": [
                "Sets the common Name (CN) of the configured directory service group containing users for the FlashBlade. This name should be just the Common Name of the group without the CN= specifier.",
                "Common Names should not exceed 64 characters in length."
            ]
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_dsrole_old": {
        "state": {
            "description": [
                "Create or delete directory service role"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "role": {
            "description": [
                "The directory service role to work on"
            ],
            "type": "str",
            "required": true,
            "choices": [
                "array_admin",
                "ops_admin",
                "readonly",
                "storage_admin"
            ]
        },
        "group_base": {
            "type": "str",
            "description": [
                "Specifies where the configured group is located in the directory tree. This field consists of Organizational Units (OUs) that combine with the base DN attribute and the configured group CNs to complete the full Distinguished Name of the groups. The group base should specify OU= for each OU and multiple OUs should be separated by commas. The order of OUs is important and should get larger in scope from left to right.",
                "Each OU should not exceed 64 characters in length."
            ]
        },
        "group": {
            "type": "str",
            "description": [
                "Sets the common Name (CN) of the configured directory service group containing users for the FlashBlade. This name should be just the Common Name of the group without the CN= specifier.",
                "Common Names should not exceed 64 characters in length."
            ]
        }
    },
    "purestorage.flasharray.purefa_endpoint": {
        "name": {
            "description": [
                "The name of the endpoint."
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the endpoint should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the endpoint on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "rename": {
            "description": [
                "Value to rename the specified endpoint to.",
                "Rename only applies to the container the current endpoint is in."
            ],
            "type": "str"
        },
        "host": {
            "description": [
                "name of host to attach endpoint to"
            ],
            "type": "str"
        },
        "hgroup": {
            "description": [
                "name of hostgroup to attach endpoint to"
            ],
            "type": "str"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the volume operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        },
        "container_version": {
            "description": [
                "Defines vCenter and EXSi host compatibility of the protocol endpoint and its associated container."
            ],
            "type": "int",
            "choices": [
                1,
                2,
                3
            ],
            "default": 1,
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_eradication": {
        "timer": {
            "description": [
                "Set the eradication timer for the FlashArray",
                "Allowed values are integers from 1 to 30. Default is 1",
                "This parameter is not allowed to be specified with I(disabled_delay) or I(enabled_delay)"
            ],
            "type": "int"
        },
        "disabled_delay": {
            "description": [
                "Configures the eradication delay for destroyed objects that I(are) protected by SafeMode (objects for which eradication is disabled)",
                "Allowed values are integers from 1 to 30. Default is 1"
            ],
            "default": 1,
            "type": "int",
            "version_added": "1.22.0"
        },
        "enabled_delay": {
            "description": [
                "Configures the eradication delay for destroyed objects that I(are not) protected by SafeMode (objects for which eradication is disabled)",
                "Allowed values are integers from 1 to 30. Default is 1"
            ],
            "default": 1,
            "type": "int",
            "version_added": "1.22.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_eula": {
        "company": {
            "description": [
                "Full legal name of the entity.",
                "The value must be between 1 and 64 characters in length."
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "Full legal name of the individual at the company who has the authority to accept the terms of the agreement.",
                "The value must be between 1 and 64 characters in length."
            ],
            "type": "str"
        },
        "title": {
            "description": [
                "Individual's job title at the company.",
                "The value must be between 1 and 64 characters in length."
            ],
            "type": "str"
        }
    },
    "purestorage.flasharray.purefa_export": {
        "name": {
            "description": [
                "Name of the export"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the export should exist or not.",
                "You must specify an NFS or SMB policy, or both on creation and deletion."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "filesystem": {
            "description": [
                "Name of the filesystem the export applies to"
            ],
            "type": "str",
            "required": true
        },
        "directory": {
            "description": [
                "Name of the managed directory in the file system the export applies to"
            ],
            "type": "str",
            "required": true
        },
        "nfs_policy": {
            "description": [
                "Name of NFS Policy to apply to the export"
            ],
            "type": "str"
        },
        "smb_policy": {
            "description": [
                "Name of SMB Policy to apply to the export"
            ],
            "type": "str"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_file": {
        "source_file": {
            "description": [
                "Name of the file to copy",
                "Include full path from the perspective of the source managed directory"
            ],
            "type": "str",
            "required": true
        },
        "source_dir": {
            "description": [
                "Name of the source managed directory containing the source file to be copied"
            ],
            "type": "str",
            "required": true
        },
        "target_file": {
            "description": [
                "Name of the file to copy to",
                "Include full path from the perspective of the target managed directory",
                "If not provided the file will be copied to the relative path specified by I(name)"
            ],
            "type": "str"
        },
        "target_dir": {
            "description": [
                "Name of the target managed directory containing the source file to be copied",
                "If not provided will use managed directory specified by I(source_dir)"
            ],
            "type": "str"
        },
        "overwrite": {
            "description": [
                "Define whether to overwrite an existing target file"
            ],
            "type": "bool",
            "default": false
        }
    },
    "purestorage.flasharray.purefa_fleet": {
        "name": {
            "description": [
                "Name of the fleet.",
                "If not provided local array will be used."
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether to add or remove member from a fleet.",
                "Create a new fleet if one does not exist. This will use the current array as the first member.",
                "Fleet deletion can only occiur when the current array is the only fleet member."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "create"
            ],
            "type": "str"
        },
        "member_url": {
            "description": [
                "Management IP address/FQDN of array to add to fleet."
            ],
            "type": "str"
        },
        "member_api": {
            "description": [
                "API token for target array"
            ],
            "type": "str"
        },
        "rename": {
            "description": [
                "new name for fleet"
            ],
            "type": "str"
        }
    },
    "purestorage.flasharray.purefa_fs": {
        "name": {
            "description": [
                "Name of the file system"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the file system should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the file system on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "rename": {
            "description": [
                "Value to rename the specified file system to",
                "Rename only applies to the container the current filesystem is in.",
                "There is no requirement to specify the pod name as this is implied."
            ],
            "type": "str"
        },
        "move": {
            "description": [
                "Move a filesystem in and out of a pod",
                "Provide the name of pod to move the filesystem to",
                "Pod names must be unique in the array",
                "To move to the local array, specify C(local)",
                "This is not idempotent - use C(ignore_errors) in the play"
            ],
            "type": "str",
            "version_added": "1.13.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_hardware": {
        "name": {
            "description": [
                "Name of hardware component"
            ],
            "type": "str",
            "required": true
        },
        "enabled": {
            "description": [
                "State of the component identification LED"
            ],
            "type": "bool"
        }
    },
    "purestorage.flasharray.purefa_hg": {
        "name": {
            "description": [
                "The name of the hostgroup."
            ],
            "type": "str",
            "required": true,
            "aliases": [
                "hostgroup"
            ]
        },
        "state": {
            "description": [
                "Define whether the hostgroup should exist or not."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "host": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of existing hosts to add to hostgroup.",
                "Note that hostnames are case-sensitive however FlashArray hostnames are unique and ignore case - you cannot have I(hosta) and I(hostA)"
            ]
        },
        "volume": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of existing volumes to add to hostgroup.",
                "Note that volumes are case-sensitive however FlashArray volume names are unique and ignore case - you cannot have I(volumea) and I(volumeA)"
            ]
        },
        "lun": {
            "description": [
                "LUN ID to assign to volume for hostgroup. Must be unique.",
                "Only applicable when only one volume is specified for connection.",
                "If not provided the ID will be automatically assigned.",
                "Range for LUN ID is 1 to 4095."
            ],
            "type": "int"
        },
        "rename": {
            "description": [
                "New name of hostgroup"
            ],
            "type": "str",
            "version_added": "1.10.0"
        },
        "eradicate": {
            "description": [
                "Whether to eradicate a deleted host group or not"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.32.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_host": {
        "name": {
            "description": [
                "The name of the host.",
                "Note that hostnames are case-sensitive however FlashArray hostnames are unique and ignore case - you cannot have I(hosta) and I(hostA)",
                "Multi-host support available from Purity//FA 6.0.0 B(***NOTE***) Manual deletion of individual hosts created using multi-host will cause idempotency to fail",
                "Multi-host support only exists for host creation"
            ],
            "type": "str",
            "required": true,
            "aliases": [
                "host"
            ]
        },
        "protocol": {
            "description": [
                "Defines the host connection protocol for volumes.",
                "DEPRECATED No longer a necessary parameter"
            ],
            "type": "str",
            "choices": [
                "fc",
                "iscsi",
                "nvme",
                "mixed"
            ]
        },
        "rename": {
            "description": [
                "The name to rename to.",
                "Note that hostnames are case-sensitive however FlashArray hostnames are unique and ignore case - you cannot have I(hosta) and I(hostA)"
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether the host should exist or not.",
                "When removing host all connected volumes will be disconnected."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "wwns": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of wwns of the host."
            ]
        },
        "iqn": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of IQNs of the host."
            ]
        },
        "nqn": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of NQNs of the host. Note that NMVe hosts can only possess NQNs. Multi-protocol is not allowed for these hosts."
            ]
        },
        "volume": {
            "type": "str",
            "description": [
                "Volume name to map to the host."
            ]
        },
        "lun": {
            "description": [
                "LUN ID to assign to volume for host. Must be unique.",
                "If not provided the ID will be automatically assigned.",
                "Range for LUN ID is 1 to 4095."
            ],
            "type": "int"
        },
        "count": {
            "description": [
                "Number of hosts to be created in a multiple host creation",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "int"
        },
        "start": {
            "description": [
                "Number at which to start the multiple host creation index",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "int",
            "default": 0
        },
        "digits": {
            "description": [
                "Number of digits to use for multiple host count. This will pad the index number with zeros where necessary",
                "Only supported from Purity//FA v6.0.0 and higher",
                "Range is between 1 and 10"
            ],
            "type": "int",
            "default": 1
        },
        "suffix": {
            "description": [
                "Suffix string, if required, for multiple host create",
                "Host names will be formed as I(<name>#<suffix>), where I(#) is a placeholder for the host index See associated descriptions",
                "Suffix string is optional",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "str"
        },
        "personality": {
            "type": "str",
            "description": [
                "Define which operating system the host is. Recommended for ActiveCluster integration."
            ],
            "default": "",
            "choices": [
                "hpux",
                "vms",
                "aix",
                "esxi",
                "solaris",
                "hitachi-vsp",
                "oracle-vm-server",
                "delete",
                ""
            ]
        },
        "preferred_array": {
            "type": "list",
            "elements": "str",
            "description": [
                "List of preferred arrays in an ActiveCluster environment.",
                "To remove existing preferred arrays from the host, specify I(delete)."
            ]
        },
        "target_user": {
            "type": "str",
            "description": [
                "Sets the target user name for CHAP authentication",
                "Required with I(target_password)",
                "To clear the username/password pair use I(clear) as the password"
            ]
        },
        "target_password": {
            "type": "str",
            "description": [
                "Sets the target password for CHAP authentication",
                "Password length between 12 and 255 characters",
                "To clear the username/password pair use I(clear) as the password",
                "SETTING A PASSWORD IS NON-IDEMPOTENT"
            ]
        },
        "host_user": {
            "type": "str",
            "description": [
                "Sets the host user name for CHAP authentication",
                "Required with I(host_password)",
                "To clear the username/password pair use I(clear) as the password"
            ]
        },
        "host_password": {
            "type": "str",
            "description": [
                "Sets the host password for CHAP authentication",
                "Password length between 12 and 255 characters",
                "To clear the username/password pair use I(clear) as the password",
                "SETTING A PASSWORD IS NON-IDEMPOTENT"
            ]
        },
        "vlan": {
            "type": "str",
            "description": [
                "The VLAN ID that the host is associated with.",
                "If not set or set to I(any), the host can access any VLAN.",
                "If set to I(untagged), the host can only access untagged VLANs.",
                "If set to a number between 1 and 4094, the host can only access the specified VLAN with that number."
            ],
            "version_added": "1.16.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        },
        "move": {
            "description": [
                "Move a host in and out of a local member realm(s) or local array",
                "Provide the name of realm(s) to move to",
                "To move to the local array, specify C(local)",
                "Host cannot have connected volume(s) for move operation"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.35.0"
        },
        "modify_resource_access": {
            "description": [
                "Describes how to modify a resource accesses of a resource when that resource is moved.",
                "The none value indicates that no resource access should be modified.",
                "The create value is used when a resource is moving out of a realm into the array and it needs to create a resource access of the moved resource to the realm from which it is moving.",
                "The delete value is used when a resource that is moving from an array into a realm already has a resource access into that realm."
            ],
            "type": "str",
            "choices": [
                "none",
                "create",
                "delete"
            ],
            "default": "none",
            "version_added": "1.35.0"
        }
    },
    "purestorage.flasharray.purefa_info": {
        "gather_subset": {
            "description": [
                "When supplied, this argument will define the information to be collected. Possible values for this include all, minimum, config, performance, capacity, network, subnet, interfaces, hgroups, pgroups, hosts, admins, volumes, snapshots, pods, replication, vgroups, offload, apps, arrays, certs, kmip, clients, policies, dir_snaps, filesystems, alerts, virtual_machines, subscriptions, realms, fleet, presets and workloads."
            ],
            "type": "list",
            "elements": "str",
            "required": false,
            "default": "minimum"
        }
    },
    "purestorage.flasharray.purefa_kmip": {
        "name": {
            "description": [
                "Name of the KMIP server object"
            ],
            "type": "str",
            "required": true
        },
        "certificate": {
            "description": [
                "Name of existing certificate used to verify FlashArray authenticity to the KMIP server.",
                "Use the I(purestorage.flasharray.purefa_certs) module to create certificates."
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Action for the module to perform"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "test"
            ],
            "type": "str"
        },
        "ca_certificate": {
            "type": "str",
            "description": [
                "The text of the CA certificate for the KMIP server.",
                "Includes the \"-----BEGIN CERTIFICATE-----\" and \"-----END CERTIFICATE-----\" lines",
                "Does not exceed 3000 characters in length"
            ]
        },
        "uris": {
            "type": "list",
            "elements": "str",
            "description": [
                "A list of URIs for the configured KMIP servers."
            ]
        }
    },
    "purestorage.flasharray.purefa_logging": {
        "log_type": {
            "description": [
                "The type of logs to be viewed"
            ],
            "type": "str",
            "default": "audit",
            "choices": [
                "audit",
                "session"
            ]
        },
        "limit": {
            "description": [
                "The maximum number of audit events returned"
            ],
            "default": 1000,
            "type": "int"
        }
    },
    "purestorage.flasharray.purefa_maintenance": {
        "state": {
            "description": [
                "Create or delete maintennance window"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "timeout": {
            "type": "int",
            "default": 3600,
            "description": [
                "Maintenance window period, specified in seconds.",
                "Range allowed is 1 hour (3600 seconds) to 48 hours (172800 seconds)",
                "Default setting is 1 hour (3600 seconds)"
            ]
        }
    },
    "purestorage.flasharray.purefa_messages": {
        "severity": {
            "description": [
                "severity of the alerts to show"
            ],
            "type": "str",
            "choices": [
                "critical",
                "warning",
                "info"
            ],
            "default": "info"
        },
        "state": {
            "description": [
                "State of alerts to show"
            ],
            "default": "open",
            "choices": [
                "open",
                "closed"
            ],
            "type": "str"
        },
        "flagged": {
            "description": [
                "Show alerts that have been acknowledged or not"
            ],
            "default": false,
            "type": "bool"
        },
        "history": {
            "description": [
                "Historical time period to show alerts for, from present time",
                "Allowed time period are hour(h), day(d), week(w) and year(y)"
            ],
            "type": "str",
            "default": "1w"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_network": {
        "name": {
            "description": [
                "Interface name (physical or virtual)."
            ],
            "required": true,
            "type": "str"
        },
        "state": {
            "description": [
                "State of existing interface (on/off)."
            ],
            "required": false,
            "default": "present",
            "choices": [
                "present",
                "absent"
            ],
            "type": "str"
        },
        "address": {
            "description": [
                "IPv4 or IPv6 address of interface in CIDR notation.",
                "To remove an IP address from a non-management port use 0.0.0.0/0"
            ],
            "required": false,
            "type": "str"
        },
        "gateway": {
            "description": [
                "IPv4 or IPv6 address of interface gateway."
            ],
            "required": false,
            "type": "str"
        },
        "mtu": {
            "description": [
                "MTU size of the interface. Range is 1280 to 9216."
            ],
            "required": false,
            "type": "int"
        },
        "servicelist": {
            "description": [
                "Assigns the specified (comma-separated) service list to one or more specified interfaces.",
                "Replaces the previous service list.",
                "Supported service lists depend on whether the network interface is Ethernet or Fibre Channel.",
                "Note that I(system) is only valid for Cloud Block Store."
            ],
            "elements": "str",
            "type": "list",
            "choices": [
                "replication",
                "management",
                "ds",
                "file",
                "iscsi",
                "scsi-fc",
                "nvme-fc",
                "nvme-tcp",
                "nvme-roce",
                "system"
            ],
            "version_added": "1.15.0"
        },
        "interface": {
            "description": [
                "Type of interface to create if subinterfaces is supplied"
            ],
            "type": "str",
            "choices": [
                "vif",
                "lacp"
            ],
            "version_added": "1.22.0"
        },
        "subordinates": {
            "description": [
                "List of one or more child devices to be added to a LACP interface",
                "Subordinates must be on the same controller, therefore the full device needs to be provided."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.22.0"
        },
        "subinterfaces": {
            "description": [
                "List of one or more child devices to be added to a VIF interface",
                "Only the 'eth' name needs to be provided, such as 'eth6'. This interface on all controllers will be assigned to the interface."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.22.0"
        },
        "subnet": {
            "description": [
                "Name of the subnet which interface is to be attached"
            ],
            "type": "str",
            "version_added": "1.22.0"
        },
        "enabled": {
            "description": [
                "State of the network interface"
            ],
            "type": "bool",
            "default": true,
            "version_added": "1.22.0"
        }
    },
    "purestorage.flasharray.purefa_ntp": {
        "state": {
            "description": [
                "Create, delete or test NTP servers configuration"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present",
                "test"
            ]
        },
        "ntp_servers": {
            "type": "list",
            "elements": "str",
            "description": [
                "A list of up to 4 alternate NTP servers. These may include IPv4, IPv6 or FQDNs. Invalid IP addresses will cause the module to fail. No validation is performed for FQDNs.",
                "If more than 4 servers are provided, only the first 4 unique nameservers will be used.",
                "if no servers are given a default of I(0.pool.ntp.org) will be used."
            ]
        },
        "ntp_key": {
            "type": "str",
            "description": [
                "The NTP symmetric key to be used for NTP authentication.",
                "If it is an ASCII string, it cannot contain the character \"#\" and cannot be longer than 20 characters.",
                "If it is a hex-encoded string, it cannot be longer than 64 characters.",
                "Setting this parameter is not idempotent."
            ],
            "version_added": "1.22.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the ntp operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.37.0"
        }
    },
    "purestorage.flasharray.purefa_offload": {
        "state": {
            "description": [
                "Define state of offload"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "name": {
            "description": [
                "The name of the offload target"
            ],
            "required": true,
            "type": "str"
        },
        "protocol": {
            "description": [
                "Define which protocol the offload engine uses",
                "NFS is not a supported protocol from Purity//FA 6.6.0 and higher"
            ],
            "default": "nfs",
            "choices": [
                "nfs",
                "s3",
                "azure",
                "gcp"
            ],
            "type": "str"
        },
        "address": {
            "description": [
                "The IP or FQDN address of the NFS server"
            ],
            "type": "str"
        },
        "share": {
            "description": [
                "NFS export on the NFS server"
            ],
            "type": "str"
        },
        "options": {
            "description": [
                "Additional mount options for the NFS share",
                "Supported mount options include I(port), I(rsize), I(wsize), I(nfsvers), and I(tcp) or I(udp)"
            ],
            "required": false,
            "default": "",
            "type": "str"
        },
        "access_key": {
            "description": [
                "Access Key ID of the offload target"
            ],
            "type": "str"
        },
        "container": {
            "description": [
                "Name of the blob container of the Azure target"
            ],
            "default": "offload",
            "type": "str"
        },
        "bucket": {
            "description": [
                "Name of the bucket for the S3 or GCP target"
            ],
            "type": "str"
        },
        "account": {
            "description": [
                "Name of the Azure blob storage account"
            ],
            "type": "str"
        },
        "secret": {
            "description": [
                "Secret Access Key for the offload target"
            ],
            "type": "str"
        },
        "initialize": {
            "description": [
                "Define whether to initialize the offload bucket"
            ],
            "type": "bool",
            "default": true
        },
        "placement": {
            "description": [
                "AWS S3 placement strategy"
            ],
            "type": "str",
            "choices": [
                "retention-based",
                "aws-standard-class",
                "aws-intelligent-tiering"
            ],
            "default": "retention-based"
        },
        "profile": {
            "description": [
                "The Offload target profile that will be selected for this target.",
                "This option allows more granular configuration for the target on top of the protocol parameter"
            ],
            "type": "str",
            "version_added": "1.21.0",
            "choices": [
                "azure",
                "gcp",
                "nfs",
                "nfs-flashblade",
                "s3-aws",
                "s3-flashblade",
                "s3-scality-ring",
                "s3-wasabi-pay-as-you-go",
                "s3-wasabi-rcs",
                "s3-other"
            ]
        },
        "uri": {
            "description": [
                "The URI used to create a connection between the array and a non-AWS S3 offload target.",
                "Storage placement strategies are not supported for non-AWS S3 offload targets.",
                "Both the HTTP and HTTPS protocols are allowed."
            ],
            "type": "str",
            "version_added": "1.32.0"
        },
        "auth_region": {
            "description": [
                "The region that will be used for initial authentication request.",
                "This parameter is optional and should be used only when region autodetection fails."
            ],
            "type": "str",
            "version_added": "1.32.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_pg": {
        "name": {
            "description": [
                "The name of the protection group."
            ],
            "type": "str",
            "aliases": [
                "pgroup"
            ],
            "required": true
        },
        "state": {
            "description": [
                "Define whether the protection group should exist or not.",
                "If specified with I(volume) or I(host) or I(hostgroup) will act on those items in the protection group only."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "volume": {
            "description": [
                "List of existing volumes to add to protection group.",
                "Note that volume are case-sensitive however FlashArray volume names are unique and ignore case - you cannot have I(volumea) and I(volumeA)"
            ],
            "type": "list",
            "elements": "str"
        },
        "host": {
            "description": [
                "List of existing hosts to add to protection group.",
                "Note that hostnames are case-sensitive however FlashArray hostnames are unique and ignore case - you cannot have I(hosta) and I(hostA)"
            ],
            "type": "list",
            "elements": "str"
        },
        "hostgroup": {
            "description": [
                "List of existing hostgroups to add to protection group.",
                "Note that hostgroups are case-sensitive however FlashArray hostgroup names are unique and ignore case - you cannot have I(groupa) and I(groupA)"
            ],
            "type": "list",
            "elements": "str"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the protection group on delete and leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "enabled": {
            "description": [
                "Define whether to enabled snapshots for the protection group."
            ],
            "type": "bool",
            "default": true
        },
        "target": {
            "description": [
                "List of remote arrays or offload target for replication protection group to connect to.",
                "Note that all replicated protection groups are asynchronous.",
                "Target arrays or offload targets must already be connected to the source array.",
                "Maximum number of targets per Portection Group is 4, assuming your configuration supports this."
            ],
            "type": "list",
            "elements": "str"
        },
        "rename": {
            "description": [
                "Rename a protection group",
                "If the source protection group is in a Pod or Volume Group 'container' you only need to provide the new protection group name in the same 'container'"
            ],
            "type": "str"
        },
        "safe_mode": {
            "description": [
                "Enables SafeMode restrictions on the protection group",
                "B(Once set disabling this can only be performed by Pure Technical Support)"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.13.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_pgsched": {
        "name": {
            "description": [
                "The name of the protection group."
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether to set or delete the protection group schedule."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "schedule": {
            "description": [
                "Which schedule to change."
            ],
            "type": "str",
            "choices": [
                "replication",
                "snapshot"
            ],
            "required": true
        },
        "enabled": {
            "description": [
                "Enable the schedule being configured."
            ],
            "type": "bool",
            "default": true
        },
        "replicate_at": {
            "description": [
                "Provide a time in 12-hour AM/PM format, eg. 11AM",
                "Only valid if I(replicate_frequency) is an exact multiple of 86400, ie 1 day."
            ],
            "type": "str"
        },
        "blackout_start": {
            "description": [
                "Specifies the time at which to suspend replication.",
                "Provide a time in 12-hour AM/PM format, eg. 11AM"
            ],
            "type": "str"
        },
        "blackout_end": {
            "description": [
                "Specifies the time at which to restart replication.",
                "Provide a time in 12-hour AM/PM format, eg. 5PM"
            ],
            "type": "str"
        },
        "replicate_frequency": {
            "description": [
                "Specifies the replication frequency in seconds.",
                "Range 900 - 34560000 (FA-405, //M10, //X10 and Cloud Block Store).",
                "Range 300 - 34560000 (all other arrays)."
            ],
            "type": "int"
        },
        "snap_at": {
            "description": [
                "Provide a time in 12-hour AM/PM format, eg. 11AM",
                "Only valid if I(snap_frequency) is an exact multiple of 86400, ie 1 day."
            ],
            "type": "str"
        },
        "snap_frequency": {
            "description": [
                "Specifies the snapshot frequency in seconds.",
                "Range available 300 - 34560000."
            ],
            "type": "int"
        },
        "days": {
            "description": [
                "Specifies the number of days to keep the I(per_day) snapshots beyond the I(all_for) period before they are eradicated",
                "Max retention period is 4000 days"
            ],
            "type": "int"
        },
        "all_for": {
            "description": [
                "Specifies the length of time, in seconds, to keep the snapshots on the source array before they are eradicated.",
                "Range available 1 - 34560000."
            ],
            "type": "int"
        },
        "per_day": {
            "description": [
                "Specifies the number of I(per_day) snapshots to keep beyond the I(all_for) period.",
                "Maximum number is 1440"
            ],
            "type": "int"
        },
        "target_all_for": {
            "description": [
                "Specifies the length of time, in seconds, to keep the replicated snapshots on the targets.",
                "Range is 1 - 34560000 seconds."
            ],
            "type": "int"
        },
        "target_per_day": {
            "description": [
                "Specifies the number of I(per_day) replicated snapshots to keep beyond the I(target_all_for) period.",
                "Maximum number is 1440"
            ],
            "type": "int"
        },
        "target_days": {
            "description": [
                "Specifies the number of days to keep the I(target_per_day) replicated snapshots beyond the I(target_all_for) period before they are eradicated.",
                "Max retention period is 4000 days"
            ],
            "type": "int"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_pgsnap": {
        "name": {
            "description": [
                "The name of the source protection group."
            ],
            "type": "str",
            "required": true
        },
        "suffix": {
            "description": [
                "Suffix of snapshot name.",
                "Special case. If I(latest) the module will select the latest snapshot created in the group"
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether the protection group snapshot should exist or not. Copy (added in 2.7) will create a full read/write clone of the snapshot."
            ],
            "type": "str",
            "choices": [
                "absent",
                "present",
                "copy",
                "rename"
            ],
            "default": "present"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the snapshot on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "restore": {
            "description": [
                "Restore a specific volume from a protection group snapshot.",
                "The protection group name is not required. Only provide the name of the volume to be restored."
            ],
            "type": "str"
        },
        "overwrite": {
            "description": [
                "Define whether to overwrite the target volume if it already exists."
            ],
            "type": "bool",
            "default": false
        },
        "target": {
            "description": [
                "Volume to restore a specified volume to.",
                "If not supplied this will default to the volume defined in I(restore)",
                "Name of new snapshot suffix if renaming a snapshot"
            ],
            "type": "str"
        },
        "offload": {
            "description": [
                "Name of offload target on which the snapshot exists.",
                "This is only applicable for deletion and erasure of snapshots"
            ],
            "type": "str"
        },
        "now": {
            "description": [
                "Whether to initiate a snapshot of the protection group immediately"
            ],
            "type": "bool",
            "default": false
        },
        "apply_retention": {
            "description": [
                "Apply retention schedule settings to the snapshot"
            ],
            "type": "bool",
            "default": false
        },
        "remote": {
            "description": [
                "Force immediate snapshot to remote targets"
            ],
            "type": "bool",
            "default": false
        },
        "throttle": {
            "description": [
                "If set to true, allows snapshot to fail if array health is not optimal."
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.21.0"
        },
        "with_default_protection": {
            "description": [
                "Whether to add the default container protection groups to those specified in I(add_to_pgs) as the initial protection of a volume created from a snapshot."
            ],
            "type": "bool",
            "default": true,
            "version_added": "1.27.0"
        },
        "add_to_pgs": {
            "description": [
                "A volume created from a snapshot will be added to the specified protection groups"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.27.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_phonehome": {
        "state": {
            "description": [
                "Define state of phonehome"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "present",
                "absent"
            ]
        },
        "excludes": {
            "description": [
                "Items that are excluded from phonehome data collection"
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "application-insights"
            ],
            "version_added": "1.40.0"
        }
    },
    "purestorage.flasharray.purefa_pod": {
        "name": {
            "description": [
                "The name of the pod."
            ],
            "type": "str",
            "required": true
        },
        "stretch": {
            "description": [
                "The name of the array to stretch to/unstretch from. Must be synchromously replicated.",
                "To unstretch an array use state I(absent)",
                "You can only specify a remote array, ie you cannot unstretch a pod from the current array and then restretch back to the current array.",
                "To restretch a pod you must perform this from the remaining array the pod resides on."
            ],
            "type": "str"
        },
        "failover": {
            "description": [
                "The name of the array given priority to stay online if arrays loose contact with each other.",
                "Options are either array in the cluster, or I(auto)"
            ],
            "type": "list",
            "elements": "str"
        },
        "state": {
            "description": [
                "Define whether the pod should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the pod on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "target": {
            "description": [
                "Name of clone target pod."
            ],
            "type": "str"
        },
        "mediator": {
            "description": [
                "Name of the mediator to use for a pod"
            ],
            "type": "str",
            "default": "purestorage"
        },
        "promote": {
            "description": [
                "Promote/demote any pod not in a stretched relationship. .",
                "Demoting a pod will render it read-only."
            ],
            "required": false,
            "type": "bool"
        },
        "quiesce": {
            "description": [
                "Quiesce/Skip quiesce when I(promote) is false and demoting an ActiveDR pod.",
                "Quiesce will ensure all local data has been replicated before demotion.",
                "Skipping quiesce looses all pending data to be replicated to the remote pod.",
                "Can only demote the pod if it is in a Acrive DR replica link relationship.",
                "This will default to True"
            ],
            "required": false,
            "type": "bool"
        },
        "undo": {
            "description": [
                "Use the I(undo-remote) pod when I(promote) is true and promoting an ActiveDR pod.",
                "This will default to True"
            ],
            "required": false,
            "type": "bool"
        },
        "quota": {
            "description": [
                "Logical quota limit of the pod in K, M, G, T or P units, or bytes."
            ],
            "type": "str",
            "version_added": "1.18.0"
        },
        "ignore_usage": {
            "description": [
                "Flag used to override checks for quota management operations.",
                "If set to true, pod usage is not checked against the quota_limits that are set.",
                "If set to false, the actual logical bytes in use are prevented from exceeding the limits set on the pod.",
                "Client operations might be impacted.",
                "If the limit exceeds the quota, the operation is not allowed."
            ],
            "default": false,
            "type": "bool",
            "version_added": "1.18.0"
        },
        "throttle": {
            "description": [
                "Allows pod creation to fail if array health is not optimal"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.29.0"
        },
        "delete_contents": {
            "description": [
                "This enables you to eradicate pods with contents."
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.29.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        },
        "with_default_protection": {
            "description": [
                "Whether to keep the default container protection for the pod",
                "Only applicable for first creation of a pod"
            ],
            "type": "bool",
            "default": true,
            "version_added": "1.37.0"
        },
        "default_protection_pg": {
            "description": [
                "Name of the default protection default for the pod",
                "Only applicable for existing pods",
                "Name must include the pod name",
                "Will create the PG in the pod if it doesn't already exist",
                "To remove an existing default protection group provide I([])"
            ],
            "type": "str",
            "version_added": "1.37.0"
        },
        "retention_lock": {
            "description": [
                "Define if I(default_protection_pg) has retention lock enabled"
            ],
            "type": "bool",
            "default": true,
            "version_added": "1.37.0"
        }
    },
    "purestorage.flasharray.purefa_pod_replica": {
        "name": {
            "description": [
                "ActiveDR source pod name"
            ],
            "required": true,
            "type": "str"
        },
        "state": {
            "description": [
                "Creates or modifies a pod replica link"
            ],
            "required": false,
            "default": "present",
            "type": "str",
            "choices": [
                "present",
                "absent"
            ]
        },
        "target_array": {
            "description": [
                "Remote array name to create replica on."
            ],
            "required": false,
            "type": "str"
        },
        "target_pod": {
            "description": [
                "Name of target pod",
                "Must not be the same as the local pod."
            ],
            "type": "str",
            "required": false
        },
        "pause": {
            "description": [
                "Pause/unpause a pod replica link"
            ],
            "required": false,
            "type": "bool"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_policy": {
        "name": {
            "description": [
                "Name of the policy"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the policy should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "policy": {
            "description": [
                "The type of policy to use"
            ],
            "choices": [
                "nfs",
                "smb",
                "snapshot",
                "quota",
                "autodir",
                "password"
            ],
            "required": true,
            "type": "str"
        },
        "enabled": {
            "description": [
                "Define if policy is enabled or not"
            ],
            "type": "bool",
            "default": true
        },
        "smb_anon_allowed": {
            "description": [
                "Specifies whether access to information is allowed for anonymous users"
            ],
            "type": "bool",
            "default": false
        },
        "client": {
            "description": [
                "Specifies which SMB or NFS clients are given access",
                "Accepted notation, IP, IP mask, or hostname"
            ],
            "type": "str"
        },
        "smb_encrypt": {
            "description": [
                "Specifies whether the remote client is required to use SMB encryption"
            ],
            "type": "bool",
            "default": false
        },
        "nfs_access": {
            "description": [
                "Specifies access control for the export"
            ],
            "choices": [
                "root-squash",
                "no-root-squash",
                "all-squash"
            ],
            "type": "str",
            "default": "no-root-squash"
        },
        "nfs_permission": {
            "description": [
                "Specifies which read-write client access permissions are allowed for the export"
            ],
            "choices": [
                "ro",
                "rw"
            ],
            "default": "rw",
            "type": "str"
        },
        "nfs_version": {
            "description": [
                "NFS protocol version allowed for the export"
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "nfsv3",
                "nfsv4"
            ],
            "version_added": "1.22.0"
        },
        "user_mapping": {
            "description": [
                "Defines if user mapping is enabled"
            ],
            "type": "bool",
            "default": true,
            "version_added": "1.14.0"
        },
        "snap_at": {
            "description": [
                "Specifies the number of hours since midnight at which to take a snapshot or the hour including AM/PM",
                "Can only be set on the rule with the smallest I(snap_every) value.",
                "Cannot be set if the I(snap_every) value is not measured in days.",
                "Can only be set for at most one rule in the same policy."
            ],
            "type": "str"
        },
        "snap_every": {
            "description": [
                "Specifies the interval between snapshots, in minutes.",
                "The value for all rules must be multiples of one another.",
                "Must be unique for each rule in the same policy.",
                "Value must be between 5 and 525600."
            ],
            "type": "int"
        },
        "snap_keep_for": {
            "description": [
                "Specifies the period that snapshots are retained before they are eradicated, in minutes.",
                "Cannot be less than the I(snap_every) value of the rule.",
                "Value must be unique for each rule in the same policy.",
                "Value must be between 5 and 525600."
            ],
            "type": "int"
        },
        "snap_client_name": {
            "description": [
                "The customizable portion of the client visible snapshot name."
            ],
            "type": "str"
        },
        "snap_suffix": {
            "description": [
                "The snapshot suffix name",
                "The suffix value can only be set for one rule in the same policy",
                "The suffix value can only be set on a rule with the same ``keep_for`` value and ``every`` value",
                "The suffix value can only be set on the rule with the largest ``keep_for`` value",
                "If not specified, defaults to a monotonically increasing number generated by the system."
            ],
            "type": "str",
            "version_added": "1.10.0"
        },
        "rename": {
            "description": [
                "New name of policy"
            ],
            "type": "str"
        },
        "directory": {
            "description": [
                "Directories to have the quota rule applied to."
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.9.0"
        },
        "quota_limit": {
            "description": [
                "Logical space limit of the share in M, G, T or P units. See examples.",
                "If size is not set at filesystem creation time the filesystem size becomes unlimited.",
                "This value cannot be set to 0."
            ],
            "type": "str",
            "version_added": "1.9.0"
        },
        "quota_notifications": {
            "description": [
                "Targets to notify when usage approaches the quota limit.",
                "The list of notification targets is a comma-separated string",
                "If not specified, notification targets are not assigned."
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "user",
                "group",
                "none"
            ],
            "version_added": "1.9.0"
        },
        "quota_enforced": {
            "description": [
                "Defines if the directory quota is enforced."
            ],
            "default": true,
            "type": "bool"
        },
        "ignore_usage": {
            "description": [
                "Flag used to override checks for quota management operations.",
                "If set to true, directory usage is not checked against the quota_limits that are set.",
                "If set to false, the actual logical bytes in use are prevented from exceeding the limits set on the directory.",
                "Client operations might be impacted.",
                "If the limit exceeds the quota, the client operation is not allowed."
            ],
            "default": false,
            "type": "bool",
            "version_added": "1.9.0"
        },
        "anonuid": {
            "description": [
                "The ID to which any users whose UID is affected by I(access) of I(root-squash) or I(all-squash) will be mapped to.",
                "Clear using \"\"."
            ],
            "type": "str",
            "default": "65534",
            "version_added": "1.14.0"
        },
        "anongid": {
            "description": [
                "The ID to which any users whose GID is affected by I(access) of I(root-squash) or I(all-squash) will be mapped to.",
                "This is ignored when I(user_mapping) is enabled.",
                "Clear using \"\"."
            ],
            "type": "str",
            "default": "65534",
            "version_added": "1.14.0"
        },
        "security": {
            "description": [
                "The security flavors to use for accessing files on a mount point.",
                "If the server does not support the requested flavor, the mount operation fails.",
                "This operation updates all rules of the specified policy."
            ],
            "type": "list",
            "elements": "str",
            "choices": [
                "auth_sys",
                "krb5",
                "krb5i",
                "krb5p"
            ],
            "version_added": "1.25.0"
        },
        "access_based_enumeration": {
            "description": [
                "Defines if access based enumeration for SMB is enabled"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.26.0"
        },
        "enforce_dictionary_check": {
            "description": [
                "If I(true), test password against dictionary of known leaked passwords.",
                "Only applies to passwords longer than 6 characters."
            ],
            "type": "bool",
            "version_added": "1.33.0"
        },
        "enforce_username_check": {
            "description": [
                "If I(true), the username cannot be a substring of the password.",
                "It only applies to usernames of 3 characters and longer"
            ],
            "type": "bool",
            "version_added": "1.33.0"
        },
        "max_login_attempts": {
            "description": [
                "Maximum number of failed logins before account is locked"
            ],
            "type": "int",
            "version_added": "1.33.0"
        },
        "min_password_length": {
            "description": [
                "Minimum user password length"
            ],
            "type": "int",
            "version_added": "1.33.0"
        },
        "lockout_duration": {
            "description": [
                "Account lockout duration, in seconds, after I(max_login_attempts) exceeded",
                "Range between 1 second and 90 days (7776000 seconds)"
            ],
            "type": "int",
            "version_added": "1.33.0"
        },
        "password_history": {
            "description": [
                "The number of passwords tracked to prevent reuse of passwords.",
                "A value of 0 will not check password history"
            ],
            "type": "int",
            "version_added": "1.33.0"
        },
        "min_character_groups": {
            "description": [
                "The minimum number of character groups required to be present in a password."
            ],
            "type": "int",
            "version_added": "1.33.0"
        },
        "min_characters_per_group": {
            "description": [
                "The minimum number of characters per group to count the group as present.",
                "Maximum is limited by the minimum password length divided by the number of character groups"
            ],
            "type": "int",
            "version_added": "1.33.0"
        },
        "rule_name": {
            "description": [
                "Name of rule to update for a quota policy"
            ],
            "type": "str",
            "version_added": "1.34.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        },
        "continuous_availability": {
            "description": [
                "Defines if continuous availability on the policy.",
                "When continuous availability is enabled on a policy, file shares are accessible during otherwise disruptive scenarios such as temporary network outages, controller upgrades or failovers."
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.40.0"
        }
    },
    "purestorage.flasharray.purefa_proxy": {
        "state": {
            "description": [
                "Set or delete proxy configuration"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        },
        "protocol": {
            "description": [
                "The proxy protocol."
            ],
            "choices": [
                "http",
                "https"
            ],
            "default": "https",
            "type": "str",
            "version_added": "1.20.0"
        },
        "host": {
            "description": [
                "The proxy host name."
            ],
            "type": "str"
        },
        "port": {
            "description": [
                "The proxy TCP/IP port number."
            ],
            "type": "int"
        }
    },
    "purestorage.flasharray.purefa_ra": {
        "state": {
            "description": [
                "Define state of remote assist",
                "When set to I(enable) the RA port can be exposed using the I(debug) module."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "enable",
                "disable",
                "absent",
                "present",
                "test"
            ]
        },
        "duration": {
            "description": [
                "Number of hours Remote Assist port stays open for.",
                "Must be an integer between 4 and 48"
            ],
            "type": "int",
            "default": 24,
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_realm": {
        "name": {
            "description": [
                "The name of the realm.",
                "This has to be unique and not equal to any existing realm or pod."
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the realm should exist or not."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the realm on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "quota": {
            "description": [
                "Logical quota limit of the realm in K, M, G, T or P units, or bytes.",
                "This must be a multiple of 512."
            ],
            "type": "str"
        },
        "bw_qos": {
            "description": [
                "Bandwidth limit for realm in M or G units. M will set MB/s G will set GB/s To clear an existing QoS setting use 0 (zero)"
            ],
            "type": "str"
        },
        "iops_qos": {
            "description": [
                "IOPs limit for realm - use value or K or M K will mean 1000 M will mean 1000000 To clear an existing IOPs setting use 0 (zero)"
            ],
            "type": "str"
        },
        "rename": {
            "description": [
                "Value to rename the specified realm to",
                "This has to be unique and not equal to any existing realm or pods."
            ],
            "type": "str"
        },
        "ignore_usage": {
            "description": [
                "Flag used to override checks for quota management operations.",
                "If set to true, realm usage is not checked against the quota_limits that are set.",
                "If set to false, the actual logical bytes in use are prevented from exceeding the limits set in the realm.",
                "Client operations might be impacted.",
                "If the limit exceeds the quota, the operation is not allowed."
            ],
            "default": false,
            "type": "bool"
        },
        "delete_contents": {
            "description": [
                "This enables you to eradicate realms with contents."
            ],
            "type": "bool",
            "default": false
        }
    },
    "purestorage.flasharray.purefa_saml": {
        "name": {
            "description": [
                "Name of the SAML2 identity provider (IdP)"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the API client should exist or not, or test."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "test"
            ],
            "type": "str"
        },
        "url": {
            "description": [
                "The URL of the identity provider"
            ],
            "type": "str"
        },
        "array_url": {
            "description": [
                "The URL of the FlashArray"
            ],
            "type": "str"
        },
        "metadata_url": {
            "description": [
                "The URL of the identity provider metadata"
            ],
            "type": "str"
        },
        "enabled": {
            "description": [
                "Defines the enabled state of the identity provider"
            ],
            "default": false,
            "type": "bool"
        },
        "encrypt_asserts": {
            "description": [
                "If set to true, SAML assertions will be encrypted by the identity provider"
            ],
            "default": false,
            "type": "bool"
        },
        "sign_request": {
            "description": [
                "If set to true, SAML requests will be signed by the service provider."
            ],
            "default": false,
            "type": "bool"
        },
        "x509_cert": {
            "description": [
                "The X509 certificate that the service provider uses to verify the SAML response signature from the identity provider"
            ],
            "type": "str"
        },
        "decryption_credential": {
            "description": [
                "The credential used by the service provider to decrypt encrypted SAML assertions from the identity provider"
            ],
            "type": "str"
        },
        "signing_credential": {
            "description": [
                "The credential used by the service provider to sign SAML requests"
            ],
            "type": "str"
        }
    },
    "purestorage.flasharray.purefa_sessions": {
        "start": {
            "description": [
                "Start date and time (based on array local time)",
                "If not provided epoch is assumed",
                "Expected format \"YYYY-MM-DD hh:mm:ss\""
            ],
            "type": "str"
        },
        "end": {
            "description": [
                "End date and time (based on array local time)",
                "If not provided epoch is assumed",
                "Expected format \"YYYY-MM-DD hh:mm:ss\""
            ],
            "type": "str"
        },
        "timezone": {
            "description": [
                "The timezone of the FlashArray",
                "If not provided, the module will attempt to get the current local timezone from the server however from Purity//FA 6.5.3 this value will calculated automatically from the FlashArray"
            ],
            "type": "str"
        }
    },
    "purestorage.flasharray.purefa_smis": {
        "slp": {
            "description": [
                "Enable/Disable Service Locator Protocol",
                "Ports used are TCP 427 and UDP 427"
            ],
            "type": "bool",
            "default": true
        },
        "smis": {
            "description": [
                "Enable/Disable SMI-S Provider",
                "Port used is TCP 5989"
            ],
            "type": "bool",
            "default": true
        }
    },
    "purestorage.flasharray.purefa_smtp": {
        "state": {
            "description": [
                "Set or delete SMTP configuration"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        },
        "password": {
            "description": [
                "The SMTP password."
            ],
            "type": "str"
        },
        "user": {
            "description": [
                "The SMTP username."
            ],
            "type": "str"
        },
        "relay_host": {
            "description": [
                "IPv4 or IPv6 address or FQDN. A port number may be appended."
            ],
            "type": "str"
        },
        "sender_domain": {
            "description": [
                "Domain name."
            ],
            "type": "str"
        },
        "sender": {
            "description": [
                "The local-part of the email address used when sending alert email messages."
            ],
            "type": "str",
            "version_added": "1.33.0"
        },
        "subject_prefix": {
            "description": [
                "Optional string added to the beginning of the subject when sending alert email messages.",
                "HTML tags are not allowed."
            ],
            "type": "str",
            "version_added": "1.33.0"
        },
        "body_prefix": {
            "description": [
                "Optional string added to the beginning of the email body when sending alert email messages.",
                "HTML tags are not allowed."
            ],
            "type": "str",
            "version_added": "1.33.0"
        },
        "encryption_mode": {
            "description": [
                "Enforces an encryption mode when sending alert email messages.",
                "Use empty string to clear."
            ],
            "type": "str",
            "choices": [
                "starttls",
                ""
            ],
            "default": "starttls",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_snap": {
        "name": {
            "description": [
                "The name of the source volume."
            ],
            "type": "str",
            "required": true
        },
        "suffix": {
            "description": [
                "Suffix of snapshot name."
            ],
            "type": "str"
        },
        "target": {
            "description": [
                "Name of target volume if creating from snapshot.",
                "Name of new snapshot suffix if renaming a snapshot"
            ],
            "type": "str"
        },
        "overwrite": {
            "description": [
                "Define whether to overwrite existing volume when creating from snapshot."
            ],
            "type": "bool",
            "default": false
        },
        "offload": {
            "description": [
                "Only valid for Purity//FA 6.1 or higher",
                "Name of offload target for the snapshot.",
                "Target can be either another FlashArray or an Offload Target",
                "This is only applicable for creation, deletion and eradication of snapshots",
                "I(state) of I(copy) is not supported."
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether the volume snapshot should exist or not."
            ],
            "choices": [
                "absent",
                "copy",
                "present",
                "rename"
            ],
            "type": "str",
            "default": "present"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the snapshot on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "ignore_repl": {
            "description": [
                "Only valid for Purity//FA 6.1 or higher",
                "If set to true, allow destruction/eradication of snapshots in use by replication.",
                "If set to false, allow destruction/eradication of snapshots not in use by replication"
            ],
            "type": "bool",
            "default": false
        },
        "throttle": {
            "description": [
                "If set to true, allows snapshot to fail if array health is not optimal."
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.21.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_snmp": {
        "name": {
            "description": [
                "Name of SNMP Manager"
            ],
            "required": true,
            "type": "str"
        },
        "state": {
            "description": [
                "Create, delete or testSNMP manager"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present",
                "test"
            ]
        },
        "auth_passphrase": {
            "type": "str",
            "description": [
                "SNMPv3 only. Passphrase of 8 - 32 characters."
            ]
        },
        "auth_protocol": {
            "type": "str",
            "description": [
                "SNMP v3 only. Hash algorithm to use"
            ],
            "choices": [
                "MD5",
                "SHA"
            ]
        },
        "community": {
            "type": "str",
            "description": [
                "SNMP v2c only. Manager community ID. Between 1 and 32 characters long."
            ]
        },
        "host": {
            "type": "str",
            "description": [
                "IPv4 or IPv6 address or FQDN to send trap messages to."
            ]
        },
        "user": {
            "type": "str",
            "description": [
                "SNMP v3 only. User ID recognized by the specified SNMP manager. Must be between 1 and 32 characters."
            ]
        },
        "version": {
            "type": "str",
            "description": [
                "Version of SNMP protocol to use for the manager."
            ],
            "choices": [
                "v2c",
                "v3"
            ],
            "default": "v2c"
        },
        "notification": {
            "type": "str",
            "description": [
                "Action to perform on event."
            ],
            "default": "trap",
            "choices": [
                "inform",
                "trap"
            ]
        },
        "privacy_passphrase": {
            "type": "str",
            "description": [
                "SNMPv3 only. Passphrase to encrypt SNMP messages. Must be between 8 and 63 non-space ASCII characters."
            ]
        },
        "privacy_protocol": {
            "type": "str",
            "description": [
                "SNMP v3 only. Encryption protocol to use"
            ],
            "choices": [
                "AES",
                "DES"
            ]
        }
    },
    "purestorage.flasharray.purefa_snmp_agent": {
        "state": {
            "type": "str",
            "description": [
                "Used to set or clear the SNMP v2c community string or the SNMP v3 auth and privacy protocols."
            ],
            "choices": [
                "absent",
                "present"
            ],
            "default": "present"
        },
        "user": {
            "type": "str",
            "description": [
                "SNMP v3 only. User ID which must be between 1 and 32 characters."
            ]
        },
        "version": {
            "type": "str",
            "description": [
                "Version of SNMP protocol to use for the manager."
            ],
            "choices": [
                "v2c",
                "v3"
            ],
            "default": "v2c"
        },
        "community": {
            "type": "str",
            "description": [
                "SNMP v2c only. Manager community ID under which Purity//FA is to communicate with the specified managers.",
                "To remove the string set I(state) to I(absent) with I(version) set to I(v2c)"
            ]
        },
        "auth_passphrase": {
            "type": "str",
            "description": [
                "SNMP v3 only. Passphrade used by Purity//FA to authenticate the array with the specified managers.",
                "Must be between 8 and 63 non-space ASCII characters."
            ]
        },
        "auth_protocol": {
            "type": "str",
            "description": [
                "SNMP v3 only. Encryption protocol to use",
                "To remove the privacy and auth protocols set I(state) to I(absent) with I(version) set to I(v3)"
            ],
            "choices": [
                "MD5",
                "SHA"
            ]
        },
        "privacy_passphrase": {
            "type": "str",
            "description": [
                "SNMP v3 only. Passphrase to encrypt SNMP messages. Must be between 8 and 63 non-space ASCII characters."
            ]
        },
        "privacy_protocol": {
            "type": "str",
            "description": [
                "SNMP v3 only. Encryption protocol to use",
                "To remove the privacy and auth protocols set I(state) to I(absent) with I(version) set to I(v3)"
            ],
            "choices": [
                "AES",
                "DES"
            ]
        }
    },
    "purestorage.flasharray.purefa_sso": {
        "state": {
            "description": [
                "Enable or disable the array Single Sign-On from Pure1 Manage"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "present",
                "absent"
            ]
        }
    },
    "purestorage.flasharray.purefa_subnet": {
        "name": {
            "description": [
                "Subnet name."
            ],
            "required": true,
            "type": "str"
        },
        "state": {
            "description": [
                "Create or delete subnet."
            ],
            "required": false,
            "default": "present",
            "choices": [
                "present",
                "absent"
            ],
            "type": "str"
        },
        "enabled": {
            "description": [
                "whether the subnet should be enabled or not"
            ],
            "default": true,
            "type": "bool"
        },
        "prefix": {
            "description": [
                "Set the IPv4 or IPv6 address to be associated with the subnet."
            ],
            "required": false,
            "type": "str"
        },
        "gateway": {
            "description": [
                "IPv4 or IPv6 address of subnet gateway.",
                "To clear the gateway enter \"0.0.0.0\" or \"::\" depending on IP type"
            ],
            "required": false,
            "type": "str"
        },
        "mtu": {
            "description": [
                "MTU size of the subnet. Range is 568 to 9000."
            ],
            "required": false,
            "type": "int"
        },
        "vlan": {
            "description": [
                "VLAN ID. Range is 0 to 4094."
            ],
            "required": false,
            "type": "int"
        }
    },
    "purestorage.flasharray.purefa_syslog": {
        "state": {
            "description": [
                "Create, updatee, delete or test syslog servers configuration"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "absent",
                "present",
                "test"
            ]
        },
        "protocol": {
            "description": [
                "Protocol which server uses"
            ],
            "required": true,
            "type": "str",
            "choices": [
                "tcp",
                "tls",
                "udp"
            ]
        },
        "port": {
            "description": [
                "Port at which the server is listening. If no port is specified the system will use 514"
            ],
            "type": "str"
        },
        "address": {
            "description": [
                "Syslog server address. This field supports IPv4, IPv6 or FQDN. An invalid IP addresses will cause the module to fail. No validation is performed for FQDNs."
            ],
            "type": "str",
            "required": true
        },
        "name": {
            "description": [
                "A user-specified name. The name must be locally unique and cannot be changed."
            ],
            "type": "str",
            "required": true
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the syslog operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.37.0"
        }
    },
    "purestorage.flasharray.purefa_syslog_settings": {
        "severity": {
            "description": [
                "Logging severity threshold for which events will be forwarded to the configured syslog servers."
            ],
            "default": "info",
            "choices": [
                "debug",
                "info",
                "notice"
            ],
            "type": "str"
        },
        "ca_certificate": {
            "type": "str",
            "description": [
                "The text of the CA certificate for configured syslog servers.",
                "Includes the \"-----BEGIN CERTIFICATE-----\" and \"-----END CERTIFICATE-----\" lines",
                "Does not exceed 3000 characters in length",
                "To delete the existing CA certificate use the special string `DELETE`"
            ]
        },
        "tls_audit": {
            "type": "bool",
            "default": true,
            "description": [
                "If messages that are necessary in order to audit TLS negotiations performed by the array are forwarded to the syslog servers."
            ]
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_timeout": {
        "state": {
            "description": [
                "Set or disable the GUI idle timeout"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "present",
                "absent"
            ]
        },
        "timeout": {
            "description": [
                "Minutes for idle timeout."
            ],
            "type": "int",
            "default": 30
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.39.0"
        }
    },
    "purestorage.flasharray.purefa_token": {
        "state": {
            "description": [
                "Create or delete API token"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "present",
                "absent"
            ]
        },
        "recreate": {
            "description": [
                "Recreates the API token, overwriting the existing API token if present"
            ],
            "type": "bool",
            "default": false
        },
        "username": {
            "description": [
                "Username of the admin user to create API token for"
            ],
            "type": "str"
        },
        "password": {
            "description": [
                "Password of the admin user to create API token for."
            ],
            "type": "str"
        },
        "fa_url": {
            "description": [
                "FlashArray management IPv4 address or Hostname."
            ],
            "type": "str"
        },
        "timeout": {
            "description": [
                "The duration of API token validity.",
                "Valid values are weeks (w), days(d), hours(h), minutes(m) and seconds(s)."
            ],
            "type": "str"
        },
        "disable_warnings": {
            "description": [
                "Disable insecure certificate warnings in debug logs"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.31.0"
        }
    },
    "purestorage.flasharray.purefa_user": {
        "state": {
            "description": [
                "Create, delete or update local user account"
            ],
            "default": "present",
            "type": "str",
            "choices": [
                "absent",
                "present"
            ]
        },
        "name": {
            "description": [
                "The name of the local user account"
            ],
            "type": "str",
            "required": true
        },
        "role": {
            "description": [
                "Sets the local user's access level to the array"
            ],
            "type": "str",
            "default": "readonly",
            "choices": [
                "readonly",
                "ops_admin",
                "storage_admin",
                "array_admin"
            ]
        },
        "password": {
            "description": [
                "Password for the local user."
            ],
            "type": "str"
        },
        "old_password": {
            "description": [
                "If changing an existing password, you must provide the old password for security"
            ],
            "type": "str"
        },
        "api": {
            "description": [
                "Define whether to create an API token for this user",
                "Token can be exposed using the I(debug) module"
            ],
            "type": "bool",
            "default": false
        },
        "timeout": {
            "description": [
                "The duration of API token validity.",
                "Valid values are weeks (w), days(d), hours(h), minutes(m) and seconds(s)."
            ],
            "type": "str",
            "default": "0",
            "version_added": "1.34.0"
        },
        "public_key": {
            "description": [
                "Public key for SSH access.",
                "To remove existing key use an empty string"
            ],
            "type": "str",
            "version_added": "1.34.0"
        },
        "ad_user": {
            "description": [
                "Whether the user is in the AD system",
                "Not required for local users"
            ],
            "type": "bool",
            "default": false,
            "version_added": "1.37.0"
        }
    },
    "purestorage.flasharray.purefa_vg": {
        "name": {
            "description": [
                "The name of the volume group.",
                "Multi-volume-group support available from Purity//FA 6.0.0 B(***NOTE***) Manual deletion or eradication of individual volume groups created using multi-volume-group will cause idempotency to fail",
                "Multi-volume-group support only exists for volume group creation"
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether the volume group should exist or not."
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "absent",
                "present"
            ]
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the volume group on delete and leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "bw_qos": {
            "description": [
                "Bandwidth limit for vgroup in M or G units. M will set MB/s G will set GB/s To clear an existing QoS setting use 0 (zero)"
            ],
            "type": "str"
        },
        "iops_qos": {
            "description": [
                "IOPs limit for vgroup - use value or K or M K will mean 1000 M will mean 1000000 To clear an existing IOPs setting use 0 (zero)"
            ],
            "type": "str"
        },
        "count": {
            "description": [
                "Number of volume groups to be created in a multiple volume group creation",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "int"
        },
        "start": {
            "description": [
                "Number at which to start the multiple volume group creation index",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "int",
            "default": 0
        },
        "digits": {
            "description": [
                "Number of digits to use for multiple volume group count. This will pad the index number with zeros where necessary",
                "Only supported from Purity//FA v6.0.0 and higher",
                "Range is between 1 and 10"
            ],
            "type": "int",
            "default": 1
        },
        "suffix": {
            "description": [
                "Suffix string, if required, for multiple volume group create",
                "Volume group names will be formed as I(<name>#I<suffix>), where I(#) is a placeholder for the volume index See associated descriptions",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "str"
        },
        "priority_operator": {
            "description": [
                "DMM Priority Adjustment operator"
            ],
            "type": "str",
            "choices": [
                "+",
                "-"
            ],
            "default": "+",
            "version_added": "1.13.0"
        },
        "priority_value": {
            "description": [
                "DMM Priority Adjustment value"
            ],
            "type": "int",
            "choices": [
                0,
                10
            ],
            "default": 0,
            "version_added": "1.13.0"
        },
        "rename": {
            "description": [
                "Value to rename the specified volume group to"
            ],
            "type": "str",
            "version_added": "1.22.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_vlan": {
        "name": {
            "description": [
                "Interface name, including controller identifier.",
                "VLANs are only supported on iSCSI, NVMe-RoCE and file physical interfaces"
            ],
            "required": true,
            "type": "str"
        },
        "state": {
            "description": [
                "State of existing interface (on/off)."
            ],
            "required": false,
            "default": "present",
            "choices": [
                "present",
                "absent"
            ],
            "type": "str"
        },
        "enabled": {
            "description": [
                "Define if VLAN interface is enabled or not."
            ],
            "required": false,
            "default": true,
            "type": "bool"
        },
        "address": {
            "description": [
                "IPv4 or IPv6 address of interface."
            ],
            "required": false,
            "type": "str"
        },
        "subnet": {
            "description": [
                "Name of subnet interface associated with."
            ],
            "required": true,
            "type": "str"
        }
    },
    "purestorage.flasharray.purefa_vnc": {
        "state": {
            "description": [
                "Define state of VNC"
            ],
            "type": "str",
            "default": "present",
            "choices": [
                "present",
                "absent"
            ]
        },
        "name": {
            "description": [
                "Name of app"
            ],
            "type": "str",
            "required": true
        }
    },
    "purestorage.flasharray.purefa_volume": {
        "name": {
            "description": [
                "The name of the volume.",
                "Volume could be created in a POD with this syntax POD_NAME::VOLUME_NAME.",
                "Volume could be created in a volume group with this syntax VG_NAME/VOLUME_NAME.",
                "Multi-volume support available from Purity//FA 6.0.0 B(***NOTE***) Manual deletion or eradication of individual volumes created using multi-volume will cause idempotency to fail",
                "Multi-volume support only exists for volume creation"
            ],
            "type": "str",
            "required": true
        },
        "target": {
            "description": [
                "The name of the target volume, if copying."
            ],
            "type": "str"
        },
        "state": {
            "description": [
                "Define whether the volume should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "eradicate": {
            "description": [
                "Define whether to eradicate the volume on delete or leave in trash."
            ],
            "type": "bool",
            "default": false
        },
        "overwrite": {
            "description": [
                "Define whether to overwrite a target volume if it already exists."
            ],
            "type": "bool",
            "default": false
        },
        "size": {
            "description": [
                "Volume size in M, G, T or P units."
            ],
            "type": "str"
        },
        "count": {
            "description": [
                "Number of volumes to be created in a multiple volume creation",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "int"
        },
        "start": {
            "description": [
                "Number at which to start the multiple volume creation index",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "int",
            "default": 0
        },
        "digits": {
            "description": [
                "Number of digits to use for multiple volume count. This will pad the index number with zeros where necessary",
                "Only supported from Purity//FA v6.0.0 and higher",
                "Range is between 1 and 10"
            ],
            "type": "int",
            "default": 1
        },
        "suffix": {
            "description": [
                "Suffix string, if required, for multiple volume create",
                "Volume names will be formed as I(<name>#I<suffix>), where I(#) is a placeholder for the volume index See associated descriptions",
                "Only supported from Purity//FA v6.0.0 and higher"
            ],
            "type": "str",
            "default": ""
        },
        "bw_qos": {
            "description": [
                "Bandwidth limit for volume in M or G units. M will set MB/s G will set GB/s To clear an existing QoS setting use 0 (zero)"
            ],
            "type": "str",
            "aliases": [
                "qos"
            ]
        },
        "iops_qos": {
            "description": [
                "IOPs limit for volume - use value or K or M K will mean 1000 M will mean 1000000 To clear an existing IOPs setting use 0 (zero)"
            ],
            "type": "str"
        },
        "move": {
            "description": [
                "Move a volume in and out of a pod or vgroup",
                "Provide the name of pod or vgroup to move the volume to",
                "Pod and Vgroup names must be unique in the array",
                "To move to the local array, specify C(local)",
                "This is not idempotent - use C(ignore_errors) in the play"
            ],
            "type": "str"
        },
        "rename": {
            "description": [
                "Value to rename the specified volume to.",
                "Rename only applies to the container the current volumes is in.",
                "There is no requirement to specify the pod or vgroup name as this is implied."
            ],
            "type": "str"
        },
        "pgroup": {
            "description": [
                "Name of existing, not deleted, protection group to add volume to",
                "Only application for volume(s) creation",
                "Superseded from Purity//FA 6.3.4 by I(add_to_pgs)"
            ],
            "type": "str",
            "version_added": "1.8.0"
        },
        "priority_operator": {
            "description": [
                "DMM Priority Adjustment operator"
            ],
            "type": "str",
            "choices": [
                "=",
                "+",
                "-"
            ],
            "version_added": "1.13.0"
        },
        "priority_value": {
            "description": [
                "DMM Priority Adjustment value"
            ],
            "type": "int",
            "choices": [
                -10,
                0,
                10
            ],
            "version_added": "1.13.0"
        },
        "with_default_protection": {
            "description": [
                "Whether to add the default container protection groups to those specified in I(add_to_pgs) as the initial protection of a new volume."
            ],
            "type": "bool",
            "default": true,
            "version_added": "1.14.0"
        },
        "add_to_pgs": {
            "description": [
                "A new volume will be added to the specified protection groups on creation"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.14.0"
        },
        "promotion_state": {
            "description": [
                "Promote or demote the volume so that the volume starts or stops accepting write requests."
            ],
            "type": "str",
            "choices": [
                "promoted",
                "demoted"
            ],
            "version_added": "1.16.0"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.33.0"
        }
    },
    "purestorage.flasharray.purefa_volume_tags": {
        "name": {
            "description": [
                "The name of the volume."
            ],
            "type": "str",
            "required": true
        },
        "namespace": {
            "description": [
                "The name of tag namespace"
            ],
            "default": "default",
            "type": "str"
        },
        "copyable": {
            "description": [
                "Define whether the volume tags are inherited on volume copies."
            ],
            "default": true,
            "type": "bool"
        },
        "kvp": {
            "description": [
                "List of key value pairs to assign to the volume.",
                "Separate the key from the value using a colon (:) only.",
                "All items in list will use I(namespace) and I(copyable) settings.",
                "See examples for exact formatting requirements"
            ],
            "type": "list",
            "elements": "str"
        },
        "tag": {
            "description": [
                "List of volume tags to be deleted from a volume"
            ],
            "type": "list",
            "elements": "str",
            "version_added": "1.38.0"
        },
        "state": {
            "description": [
                "Define whether the volume tag(s) should exist or not."
            ],
            "default": "present",
            "choices": [
                "absent",
                "present"
            ],
            "type": "str"
        },
        "context": {
            "description": [
                "Name of fleet member on which to perform the operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": "",
            "version_added": "1.38.0"
        }
    },
    "purestorage.flasharray.purefa_workload": {
        "context": {
            "description": [
                "Name of fleet member on which to perform the workload operation.",
                "This requires the array receiving the request is a member of a fleet and the context name to be a member of the same fleet."
            ],
            "type": "str",
            "default": ""
        },
        "host": {
            "type": "str",
            "description": [
                "Host to connect to the workload after provisioning"
            ],
            "default": ""
        },
        "name": {
            "description": [
                "Name of the workload."
            ],
            "type": "str",
            "required": true
        },
        "state": {
            "description": [
                "Define whether to create or delete a fleet workload.",
                "Using the expand option will add volume(s) to the workload.",
                "If absent is specified together with a host, rather than deleting the workload, the host will be disconnected from the workload"
            ],
            "default": "present",
            "choices": [
                "absent",
                "present",
                "expand"
            ],
            "type": "str"
        },
        "preset": {
            "description": [
                "name of existing preset to use as the basis of the workload"
            ],
            "type": "str"
        },
        "rename": {
            "description": [
                "new name for a workload"
            ],
            "type": "str"
        },
        "eradicate": {
            "description": [
                "whether to eradicate a workload"
            ],
            "type": "bool",
            "default": false
        },
        "placement": {
            "description": [
                "name of target on which the workload will be deployed"
            ],
            "type": "str"
        },
        "recommendation": {
            "description": [
                "whether to use the Fusion placement recommendation based on the workload preset definitions.",
                "This will use the first recommended placement if more than one is available"
            ],
            "default": false,
            "type": "bool"
        },
        "volume_count": {
            "description": [
                "Number of additional volumes to add to an existing workload"
            ],
            "type": "int"
        },
        "volume_configuration": {
            "description": [
                "Name of the volume configuration to use for adding volumes to a workload"
            ],
            "type": "str"
        }
    }
}